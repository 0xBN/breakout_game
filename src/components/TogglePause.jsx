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
    <button
      className={`border rounded-md px-4 py-2 ${
        isGameRunning ? 'bg-green-500' : 'bg-red-500'
      }`}
      onClick={() => setIsGameRunning(!isGameRunning)}
    >
      {isGameRunning ? 'In Game' : 'Paused'}
    </button>
  );
};
export default TogglePause;
