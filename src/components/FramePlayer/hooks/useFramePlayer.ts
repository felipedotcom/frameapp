import { useState, useCallback } from 'react';

const useFramePlayer = (totalFrames: number) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    console.log('Play clicked');
    setIsPlaying(true);
  };

  const pause = () => {
    console.log('Pause clicked');
    setIsPlaying(false);
  };

  const seek = useCallback((frame: number) => {
    setCurrentFrame((frame + totalFrames) % totalFrames);
  }, [totalFrames]);

  const reset = () => {
    setCurrentFrame(0);
    setIsPlaying(false);
  };

  return {
    currentFrame,
    isPlaying,
    play,
    pause,
    seek,
    reset,
  };
};

export default useFramePlayer;
