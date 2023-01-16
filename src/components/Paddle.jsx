import { useEffect } from 'react';
import { useCanvasContext } from '../contexts';

const Paddle = () => {
  const {
    canvasSize,

    setIsPaddleLoaded,
    setPaddle,
    paddle,
  } = useCanvasContext();

  useEffect(() => {
    const START_PADDLE = {
      x: 100,
      y: canvasSize.height - 30,
      height: 20,
      width: 100,
      colors: ['red', '#FFA62B'],
    };

    setPaddle(() => {
      let newPaddle = paddle;
      newPaddle = START_PADDLE;
      return newPaddle;
    });

    if (!isNaN(START_PADDLE.y)) {
      setIsPaddleLoaded(true);
    }
  }, [canvasSize]);
};
export default Paddle;
