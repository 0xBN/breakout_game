import { useEffect } from 'react';
import { useCanvasContext } from '../contexts';

const SingleBrick = () => {
  const {
    canvasSize,

    singleBrick,
    setSingleBrick,
    setIsSingleBrickLoaded,
    bricksPerRow,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasSize, setIsSingleBrickLoaded, setSingleBrick]);

  return <div>SingleBrick: {JSON.stringify(singleBrick)}</div>;
};
export default SingleBrick;
