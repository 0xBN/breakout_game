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
    <div className='bg-black text-white min-h-screen overflow-clip flex flex-col'>
      <TogglePause />
      <Board />
      <div>player: {JSON.stringify(player)}</div>
      <div>
        {player.win && (
          <Confetti width={canvasSize.width} height={canvasSize.height} />
        )}
      </div>
    </div>
  );
}

export default App;
