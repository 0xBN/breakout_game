import { useCanvasContext } from '../contexts';
import { useEffect } from 'react';
import {
  useBallMovement,
  usePaddleMovement,
  useSingleBrick,
  useBrickCollision,
  usePlayerStats,
} from './';

const useDraw = () => {
  const {
    ballMovement,

    ballWallCollision,
  } = useBallMovement();

  const { drawPlayerStats, checkAllBroken } = usePlayerStats();
  const {
    paddleMovement,

    paddleWallCollision,
    paddleBallCollision,
  } = usePaddleMovement();

  const { drawSingleBrick } = useSingleBrick();
  const { brickCollision, brickBallCollision } = useBrickCollision();
  const {
    isBallLoaded,

    isPaddleLoaded,
    bricks,
    isSingleBrickLoaded,
    ball,
    setBall,
  } = useCanvasContext();
  const draw = () => {
    if (!isSingleBrickLoaded) return;
    bricks.map((brick) => drawSingleBrick(brick));

    if (!isBallLoaded) return;
    ballMovement();
    ballWallCollision();

    if (!isPaddleLoaded) return;
    paddleMovement();
    paddleWallCollision();

    brickBallCollision();
    paddleBallCollision();

    drawPlayerStats();
    checkAllBroken();
  };
  return { draw };
};
export default useDraw;
