import { useRef, useEffect } from 'react';
import { useCanvasContext } from '../contexts';
import { useBallMovement, usePlayerStats } from './';

const useBrickCollision = () => {
  const { bricks, ball } = useCanvasContext();
  const { ballMovement } = useBallMovement();

  const { updatePlayerScore } = usePlayerStats();
  const brickCollision = (circle, rect) => {
    let distX = Math.abs(circle.x - rect.x - rect.width / 2);
    let distY = Math.abs(circle.y - rect.y - rect.height / 2);

    if (distX > rect.width / 2 + circle.rad) {
      return {
        hit: false,
      };
    }

    if (distY > rect.height / 2 + circle.rad) {
      return {
        hit: false,
      };
    }

    if (distX <= rect.width / 2) {
      return { hit: true, axis: 'Y' };
    }
    if (distY < rect.height / 2) {
      return { hit: true, axis: 'X' };
    }

    let dx = distX - rect.width / 2;
    let dy = distY - rect.height / 2;

    return {
      hit: dx * dx + dy * dy <= circle.rad * circle.rad,
      axis: 'X',
    };
  };

  const brickBallCollision = () => {
    for (let i = 0; i < bricks.length; i++) {
      let collision = brickCollision(ball, bricks[i]);
      if (collision.hit && !bricks[i].broke) {
        if (collision.axis === 'X') {
          ballMovement('x');
          bricks[i].broke = true;
        } else if (collision.axis === 'Y') {
          ballMovement('y');

          bricks[i].broke = true;
        }
        updatePlayerScore();
      }
    }
  };

  return { brickCollision, brickBallCollision };
};
export default useBrickCollision;
