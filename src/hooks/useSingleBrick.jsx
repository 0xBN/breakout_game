import { useCanvasContext } from '../contexts';
import { useEffect } from 'react';
import { useBallMovement, usePaddleMovement } from './';

const useSingleBrick = () => {
  const {
    isBallLoaded,

    isPaddleLoaded,
    context,
    isSingleBrickLoaded,
  } = useCanvasContext();

  const drawSingleBrick = (specificSingleBrick) => {
    // if (!isSingleBrickLoaded.colors) return;

    context.beginPath();
    context.rect(
      specificSingleBrick.x,
      specificSingleBrick.y,
      specificSingleBrick.width,
      specificSingleBrick.height
    );
    context.fillStyle = specificSingleBrick.broke
      ? 'rgba(19, 73, 89, 0)'
      : 'lightblue';
    //: specificSingleBrick.colors[1];

    context.lineWidth = 5;
    context.strokeStyle = specificSingleBrick.broke
      ? 'rgba(19, 73, 89, 0)'
      : 'transparent';
    // context.globalCompositeOperation = "destination-atop";
    // context.shadowBlur = 0;
    // context.shadowColor = "blue";
    context.fill();
    context.strokeRect(
      specificSingleBrick.x,
      specificSingleBrick.y,
      specificSingleBrick.width,
      specificSingleBrick.height
    );

    // OLD BELOW
    // OLD BELOW
    // OLD BELOW
    // OLD BELOW
    // OLD BELOW

    // context.beginPath();
    // context.rect(
    //   specificSingleBrick.x,
    //   specificSingleBrick.y,
    //   specificSingleBrick.width,
    //   specificSingleBrick.height
    // );

    // context.fillStyle = specificSingleBrick.broke
    //   ? '#134959'
    //   : specificSingleBrick.colors[1];
    // context.strokeStyle = specificSingleBrick.broke ? '#134959' : '#134959';
    // context.lineWidth = 5;
    // context.fillStyle = specificSingleBrick.broke
    //   ? '#134959'
    //   : specificSingleBrick.colors[1];
    // context.shadowBlur = 0;
    // context.shadowColor = 'blue';
    // context.strokeRect(
    //   specificSingleBrick.x,
    //   specificSingleBrick.y,
    //   specificSingleBrick.width,
    //   specificSingleBrick.height
    // );
    // context.fill();
  };

  return { drawSingleBrick };
};
export default useSingleBrick;
