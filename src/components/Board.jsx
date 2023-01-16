import { useCanvasContext } from '../contexts';

import { useCanvas, usePaddleMovement } from '../hooks';
import { Bricks, Ball, Paddle, Player, SingleBrick } from '.';

const Board = () => {
  const { draw } = useCanvasContext();

  const { handlePaddleMouseMovement } = usePaddleMovement();

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      id='canvas'
      ref={canvasRef}
      className={`border bg-teal-900 rounded-md`}
      height='500'
      width={
        window.innerWidth < 900
          ? window.innerWidth - 20
          : window.innerWidth - (window.innerWidth * 20) / 100
      }
      onMouseMove={handlePaddleMouseMovement}
    >
      <Bricks />
      <SingleBrick />
      <Ball />
      <Paddle />
      <Player />
    </canvas>
  );
};
export default Board;
