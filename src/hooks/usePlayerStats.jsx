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
    // SCORE
    // context.font = '20px Arial';
    // context.fillStyle = 'white';
    // context.fillText(`Score: ${player.score}`, canvasSize.width - 140, 30);
  };

  const drawWin = () => {
    context.clearRect(0, 0, canvasObject.width, canvasObject.height);
    context.font = '50px Arial';
    context.fillStyle = 'white';
    context.fillText(
      `You Win!`,
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
      drawWin();
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
