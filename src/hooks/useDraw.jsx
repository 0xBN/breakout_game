import { useCanvasContext } from '../contexts';

import {
  useBallMovement,
  usePaddleMovement,
  useSingleBrick,
  useBrickCollision,
  usePlayerStats,
} from './';

const useDraw = () => {
  const { drawSingleBrick } = useSingleBrick();
  const { brickBallCollision } = useBrickCollision();
  const { ballMovement, ballWallCollision } = useBallMovement();
  const { drawPlayerStats, checkAllBroken } = usePlayerStats();
  const { paddleMovement, paddleWallCollision, paddleBallCollision } =
    usePaddleMovement();
  const { isBallLoaded, isPaddleLoaded, bricks, isSingleBrickLoaded } =
    useCanvasContext();

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
