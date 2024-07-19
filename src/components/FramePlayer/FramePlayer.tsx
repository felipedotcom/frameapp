import React, { useEffect, useMemo } from 'react';
import ImageDisplay from './components/ImageDisplay';
import ControlButtons from './components/ControlButtons';
import ProgressBar from './components/ProgressBar';
import useFramePlayer from './hooks/useFramePlayer';
import placeholderImage from '../../assets/react.svg';

interface FramePlayerProps {
  frames: string[];
  fps: number;
  handleFpsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FramePlayer: React.FC<FramePlayerProps> = ({ frames, fps, handleFpsChange }) => {
  const { currentFrame, isPlaying, play, pause, seek } = useFramePlayer(frames.length);

  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        seek(currentFrame + 1);
      }, 1000 / fps);

      return () => clearInterval(intervalId);
    }
  }, [isPlaying, currentFrame, fps, seek]);

  const displayFrame = useMemo(() => frames.length > 0 ? frames[currentFrame] : placeholderImage, [frames, currentFrame]);

  return (
    <div className="frame-player mt-4 max-w-full mx-auto border rounded-lg p-4 bg-white shadow-lg">
      <ImageDisplay src={displayFrame} />
      <ControlButtons play={play} pause={pause} isPlaying={isPlaying} fps={fps} handleFpsChange={handleFpsChange} />
      <ProgressBar currentFrame={currentFrame} totalFrames={frames.length} seek={seek} />
    </div>
  );
};

export default FramePlayer;
