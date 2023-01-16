import { useCanvasContext } from '../contexts';
import { usePlayerStats } from './';

const useBallMovement = () => {
  const { context, paddle, setBall, ball, canvasSize, setIsGameRunning } =
    useCanvasContext();

  const { updatePlayerLives } = usePlayerStats();

  const ballMovement = (divert, value) => {
    drawBallPath();

    let newBall = ball;

    if (divert === 'x') {
      setBall(() => {
        newBall.dx *= -1;
        return newBall;
      });
    } else if (divert === 'y') {
      setBall(() => {
        newBall.dy *= -1;
        return newBall;
      });
    } else if (divert === 'angle') {
      setBall(() => {
        newBall.dx = newBall.speed * Math.sin(value);
        newBall.dy = -newBall.speed * Math.cos(value);
        return newBall;
      });
    } else if (divert === 'outBounds') {
      setBall(() => {
        // newBall.x = paddle.x;
        // newBall.y = paddle.y - 40;
        // newBall.dx = 6 * (Math.random() * 2 - 1);
        // newBall.dy = -6;

        newBall.x = paddle.x;
        newBall.y = paddle.y - 30;
        newBall.dx = 6 * (Math.random() * 2 - 1);
        newBall.dy = -6;

        return newBall;
      });
    } else {
      setBall(() => {
        newBall.x += newBall.dx;
        newBall.y += newBall.dy;
        return newBall;
      });
    }
  };

  const drawBallPath = () => {
    context.beginPath();
    context.fillStyle = 'red';
    context.arc(ball.x, ball.y, ball.rad, 0, 2 * Math.PI);
    context.strokeStyle = 'black';
    context.strokeWidth = 4;
    context.fill();
    context.stroke();
  };

  const ballWallCollision = () => {
    let newBall = ball;
    setBall(() => {
      if (ball.y - ball.rad <= 0) {
        newBall.dy *= -1;
      }
      if (ball.x + ball.rad >= canvasSize.width || ball.x - ball.rad <= 0) {
        console.log('hit side wall');
        newBall.dx *= -1;
      }
      // BOTTOM WALL OUT OF BOUNDS
      if (ball.y + ball.rad >= canvasSize.height) {
        updatePlayerLives();
        ballMovement('outBounds');
        setIsGameRunning(false);
      }
      return newBall;
    });
  };

  return { ballMovement, ballWallCollision };
};
export default useBallMovement;
