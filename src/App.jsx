import { useContext } from 'react';
import { useCanvasContext } from './contexts';

import Confetti from 'react-confetti';
import {
  Ball,
  BallMovement,
  Board,
  TogglePause,
  SingleBrick,
  Bricks,
} from './components';

function App() {
  const { player, canvasSize } = useCanvasContext();

  return (
    <div className='bg-black text-white min-h-screen overflow-clip flex flex-col items-center justify-center gap-4'>
      <h1 className={`font-bold text-4xl`}>BREAKOUT</h1>
      <TogglePause />
      <Board />

      {player.win && (
        <Confetti width={canvasSize.width} height={canvasSize.height} />
      )}
    </div>
  );
}

export default App;
