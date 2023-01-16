import { useEffect, useState } from 'react';
import { useCanvasContext } from '../contexts';

const SingleBrick = () => {
  const {
    canvasSize,

    singleBrick,
    setSingleBrick,
    setIsSingleBrickLoaded,
    bricksPerRow,
    maxCanvas,
  } = useCanvasContext();

  useEffect(() => {
    const START_BRICK = {
      x: 0.5,
      y: 50,
      width: canvasSize.width / bricksPerRow - 13,
      height: 20,
      density: 2,
      colors: ['blue', 'lightblue'],
      broke: false,
    };

    if (isNaN(START_BRICK.width)) return;

    setSingleBrick(() => {
      let newSingleBrick = singleBrick;
      newSingleBrick = START_BRICK;

      return newSingleBrick;
    });

    setIsSingleBrickLoaded(true);
  }, [canvasSize, setIsSingleBrickLoaded, setSingleBrick]);

  // console.log(singleBrick.broke === false);

  return <div>SingleBrick: {JSON.stringify(singleBrick)}</div>;
};
export default SingleBrick;
