import { useEffect } from 'react';
import { useCanvasContext } from '../contexts';

const TogglePause = () => {
  const { isGameRunning, setIsGameRunning } = useCanvasContext();

  useEffect(() => {
    const pauseAnimation = (e) => {
      if (e.keyCode !== 32) return;
      setIsGameRunning(!isGameRunning);
    };
    document.addEventListener('keydown', pauseAnimation);
    return () => document.removeEventListener('keydown', pauseAnimation);
  });

  return (
    <button onClick={() => setIsGameRunning(!isGameRunning)}>
      {isGameRunning ? 'Running' : 'Paused'}
    </button>
  );
};
export default TogglePause;
