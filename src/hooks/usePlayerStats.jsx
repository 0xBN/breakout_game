import { useRef, useEffect, useContext } from 'react';
import { useCanvasContext } from '../contexts';

const usePlayerStats = () => {
  const {
    canvasSize,

    context,
    player,
    setPlayer,
    brickCount,
    setIsGameRunning,
    canvasObject,
  } = useCanvasContext();
  const drawPlayerStats = () => {
    // NAME
    context.font = '20px Arial';
    context.fillStyle = 'white';
    context.fillText(`Name: ${player.name}`, 20, 30);
    // LIVES
    context.font = '20px Arial';
    context.fillStyle = 'red';
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
      context.fillText('❤', canvasSize.width / 2 + gap, 30);
      gap += 30;
    }
  };

  const drawMessage = (message) => {
    context.clearRect(0, 0, canvasObject.width, canvasObject.height);
    context.font = '50px Arial';
    context.fillStyle = 'white';
    context.fillText(
      message,
      canvasSize.width / 2 - 100,
      canvasSize.height / 2
    );
  };

  const updatePlayerScore = () => {
    setPlayer(() => {
      let newPlayer = player;
      newPlayer.score += 10;
      return newPlayer;
    });
  };

  const updatePlayerLives = () => {
    console.log('update player lives');
    setPlayer(() => {
      let newPlayer = player;
      newPlayer.lives--;
      return newPlayer;
    });
  };

  const checkAllBroken = () => {
    if (player.score / 10 === brickCount) {
      setPlayer(() => {
        let newPlayer = player;
        player.win = true;
        return newPlayer;
      });
      drawMessage('You Win!');
      setIsGameRunning(false);
    } else if (player.lives === 0) {
      console.log('lose');
      drawMessage('You Lose...');
      setIsGameRunning(false);
    }
  };

  return {
    drawPlayerStats,
    updatePlayerScore,
    updatePlayerLives,
    checkAllBroken,
  };
};
export default usePlayerStats;
