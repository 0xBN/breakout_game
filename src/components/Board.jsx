import { useRef, useEffect, useContext } from 'react';
import { useCanvasContext } from '../contexts';

import { useCanvas, usePaddleMovement } from '../hooks';
import { Bricks, Ball, Paddle, Player, SingleBrick } from '.';

const Board = () => {
  const {
    canvasSize,

    draw,
    setPaddle,
    paddle,
  } = useCanvasContext();

  const { handlePaddleMouseMovement } = usePaddleMovement();

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      id='canvas'
      ref={canvasRef}
      className={`border bg-teal-900 rounded-md`}
      height={canvasSize.height}
      width={canvasSize.width < 800 ? canvasSize.width : 800}
      // onMouseDown={handlePaddleMouseMovement}
      onMouseMove={handlePaddleMouseMovement}
      onTouchStart={handlePaddleMouseMovement}
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
