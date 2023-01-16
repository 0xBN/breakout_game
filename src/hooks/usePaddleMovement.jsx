import { useCanvasContext } from '../contexts';
import { useBallMovement } from './';

const usePaddleMovement = () => {
  const {
    context,

    paddle,
    setPaddle,
    canvasSize,
    ball,
  } = useCanvasContext();

  const { ballMovement } = useBallMovement();

  const paddleMovement = () => {
    drawPaddlePath(context);
  };

  const drawPaddlePath = () => {
    context.beginPath();
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fillStyle = paddle.broke ? 'white' : paddle.colors[1];
    context.strokeStyle = paddle.broke ? 'white' : 'red';
    context.lineWidth = 1;
    context.fillStyle = paddle.broke ? 'white' : paddle.colors[1];
    context.shadowBlur = 0;
    context.shadowColor = 'blue';
    context.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fill();
  };

  const paddleWallCollision = () => {
    setPaddle((prev) => {
      let newPaddle = paddle;
      if (paddle.x <= 0) {
        newPaddle.x = 0;
      }
      if (paddle.x + paddle.width >= canvasSize.width) {
        newPaddle.x = canvasSize.width - paddle.width;
      }
      return newPaddle;
    });
  };

  const paddleBallCollision = () => {
    if (
      ball.x < paddle.x + paddle.width &&
      ball.x > paddle.x &&
      paddle.y < paddle.y + paddle.height &&
      ball.y + ball.rad > paddle.y - paddle.height / 2
    ) {
      // CHECK WHERE BALL HITS PADDLE
      let collidePoint = ball.x - (paddle.x + paddle.width / 2);
      // NORMALIZE VALUES
      collidePoint = collidePoint / (paddle.width / 2);

      // CALCULATE ANGLE OF THE BALL
      let angle = (collidePoint * Math.PI) / 3;

      // SET BALL
      ballMovement('angle', angle);
    }
  };

  const handlePaddleMouseMovement = (e) => {
    paddle.x =
      e.clientX -
      (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
      paddle.width / 2 -
      10;
  };

  return {
    paddleMovement,
    paddleWallCollision,
    paddleBallCollision,
    handlePaddleMouseMovement,
  };
};
export default usePaddleMovement;
