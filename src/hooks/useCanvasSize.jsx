import { useEffect } from 'react';

const useCanvasSize = (setCanvasSize, width, height) => {
  // INITIALIZE CANVAS
  useEffect(() => {
    setCanvasSize({ width, height });
  }, [height, setCanvasSize, width]);

  // HANDLE RESIZE
  useEffect(() => {
    const handleWindowResize = () => {
      setCanvasSize({ width, height });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [height, setCanvasSize, width]);
};
export default useCanvasSize;
