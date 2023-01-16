import { useEffect } from 'react';

import { useCanvasContext } from '../contexts';

const Bricks = () => {
  const {
    bricks,
    setBricks,
    canvasSize,
    singleBrick,
    brickCount,

    bricksPerRow,
  } = useCanvasContext();

  useEffect(() => {
    let list = [];
    let newBrick;

    if (isNaN(singleBrick.x)) return;

    const addToList = () => {
      let brickGaps = 10;
      let brickPadding = 15;

      // ROW 1
      for (let i = 0; i < brickCount; i++) {
        newBrick = { ...singleBrick };

        newBrick.x += i * (newBrick.width + brickGaps) + brickPadding;
        let maxWidth = newBrick.x + newBrick.width;

        if (maxWidth > canvasSize.width) {
          newBrick = { ...singleBrick };
          newBrick.x +=
            (i % bricksPerRow) * (newBrick.width + brickGaps) + brickPadding;
          newBrick.y += newBrick.height + brickGaps;
          list.push(newBrick);
        } else {
          list.push(newBrick);
        }
      }
    };

    addToList();
    setBricks(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brickCount, setBricks, singleBrick]);

  return (
    <div>
      {bricks.map((brick, index) => (
        <div key={index}>{JSON.stringify(brick)}</div>
      ))}
    </div>
  );
};
export default Bricks;
