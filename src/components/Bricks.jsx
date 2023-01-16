import { useEffect, useState } from 'react';

import { useCanvasContext } from '../contexts';
import { SingleBrick } from './';

const Bricks = () => {
  const {
    bricks,
    setBricks,
    canvasSize,
    singleBrick,
    brickCount,
    setSingleBrick,
    isSingleBrickLoaded,
    bricksPerRow,
  } = useCanvasContext();

  const [list2, setList2] = useState([]);

  useEffect(() => {
    let testArray = [...Array(3).keys()];
    let list = [];
    let newBrick;

    let customIndex = 0;

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
    // console.log(list);
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
