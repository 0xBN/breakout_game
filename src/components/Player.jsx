import { useEffect } from 'react';
import { useCanvasContext } from '../contexts';

const Player = () => {
  const { setPlayer } = useCanvasContext();
  const PLAYER_INITIALIZE = {
    name: 'Guest',
    lives: 5,
    score: 0,
    level: 1,
    win: false,
  };

  useEffect(() => {
    setPlayer(() => PLAYER_INITIALIZE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Player</div>;
};
export default Player;
