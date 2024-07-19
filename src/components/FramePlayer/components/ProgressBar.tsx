import React from 'react';

interface ProgressBarProps {
  currentFrame: number;
  totalFrames: number;
  seek: (frame: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentFrame, totalFrames, seek }) => {
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  return (
    <div className="progress-bar mt-2">
      <input 
        type="range" 
        min="0" 
        max={totalFrames - 1} 
        value={currentFrame} 
        onChange={handleSeek} 
        className="w-full"
      />
    </div>
  );
};

export default ProgressBar;
