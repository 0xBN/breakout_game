import { useRef, useEffect, useContext } from 'react';
import { useCanvasContext } from '../contexts';

const Player = () => {
  const {
    canvasSize,

    draw,
    setPaddle,
    paddle,
    player,
    setPlayer,
  } = useCanvasContext();
  const PLAYER_INITIALIZE = {
    name: 'Guest',
    lives: 5,
    score: 0,
    level: 1,
    win: false,
  };

  useEffect(() => {
    console.log('initialize player');
    setPlayer(() => PLAYER_INITIALIZE);
  }, []);
  return <div>Player</div>;
};
export default Player;
