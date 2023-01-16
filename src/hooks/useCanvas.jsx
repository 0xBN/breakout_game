import { useRef, useEffect } from 'react';
import { useCanvasContext } from '../contexts';
import { useCanvasSize, useDraw } from '../hooks';

const useCanvas = () => {
  const { isGameRunning, setContext, setCanvasObject } = useCanvasContext();
  const { draw } = useDraw();

  useCanvasSize(window.innerWidth - 20, 500);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isGameRunning) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    setContext(context);
    setCanvasObject(canvas);

    let animationFrameId;

    const render = (timestamp) => {
      // ASSIGN BRICKS
      context.clearRect(0, 0, canvas.width, canvas.height);

      draw();

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draw, isGameRunning, setContext]);

  return canvasRef;
};
export default useCanvas;
