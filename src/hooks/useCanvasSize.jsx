import { useEffect } from 'react';
import { useCanvasContext } from '../contexts';

const useCanvasSize = () => {
  const { setCanvasSize } = useCanvasContext();
  // INITIALIZE CANVAS
  useEffect(() => {
    let height = 500;
    let width =
      window.innerWidth < 900
        ? window.innerWidth - 20
        : window.innerWidth - (window.innerWidth * 20) / 100;
    setCanvasSize({ width, height });
  }, [setCanvasSize]);
};
export default useCanvasSize;
