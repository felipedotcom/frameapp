import { useState, useCallback } from 'react';

const useFramePlayer = (totalFrames: number) => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const play = () => {
    setIsPlaying(true);
  };

  const pause = () => {
    setIsPlaying(false);
  };

  const onFrameChange = useCallback((frame: number) => {
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
    onFrameChange,
    reset,
  };
};

export default useFramePlayer;