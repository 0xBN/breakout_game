import { createContext, useState, useContext } from 'react';
import { useDraw } from '../hooks';

const CanvasContext = createContext({});

export const CanvasProvider = ({ children }) => {
  const [isGameRunning, setIsGameRunning] = useState(true);

  const [canvasObject, setCanvasObject] = useState();
  const [canvasSize, setCanvasSize] = useState({});
  const [canvasSize2, setCanvasSize2] = useState({ width: 600, height: 500 });
  const [context, setContext] = useState();

  const [ball, setBall] = useState({});
  const [isBallLoaded, setIsBallLoaded] = useState(false);

  const [paddle, setPaddle] = useState({});
  const [isPaddleLoaded, setIsPaddleLoaded] = useState(false);

  const [bricks, setBricks] = useState([]);
  const [brickCount, setBrickCount] = useState(16);
  const [bricksPerRow, setBricksPerRow] = useState(8);

  const [singleBrick, setSingleBrick] = useState({});
  const [isSingleBrickLoaded, setIsSingleBrickLoaded] = useState(false);
  const [player, setPlayer] = useState({});

  const brickObject = {
    x: 0.5,
    y: 50,
    width: 800 / 10 - 1,
    height: 20,
    density: 2,
    colors: ['blue', 'lightblue'],
  };

  return (
    <CanvasContext.Provider
      value={{
        isGameRunning,
        setIsGameRunning,
        context,
        setContext,
        brickObject,
        player,
        setPlayer,

        ball,
        setBall,

        canvasSize,
        setCanvasSize,
        paddle,
        setPaddle,

        bricks,
        setBricks,
        setIsBallLoaded,
        isBallLoaded,

        isPaddleLoaded,
        setIsPaddleLoaded,

        singleBrick,
        setSingleBrick,
        brickCount,
        setBrickCount,

        isSingleBrickLoaded,
        setIsSingleBrickLoaded,
        bricksPerRow,
        setBricksPerRow,
        canvasObject,
        setCanvasObject,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);
