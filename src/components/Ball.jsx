import { useEffect } from 'react';
import { useCanvasContext } from '../contexts';

const Ball = () => {
  const {
    ball,

    setBall,
    setIsBallLoaded,
  } = useCanvasContext();

  const START_BALL_POSITION = {
    x: 22,
    y: 200,
    dx: 5,
    dy: 5,
    rad: 10,
    speed: 10,
  };

  useEffect(() => {
    setBall(() => {
      let newBall = ball;
      newBall = START_BALL_POSITION;
      return newBall;
    });
    setIsBallLoaded(true);
  }, []);
  return <div>Ball</div>;
};
export default Ball;
