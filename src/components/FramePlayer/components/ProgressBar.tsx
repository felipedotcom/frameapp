import React from 'react';

interface ProgressBarProps {
  currentFrame: number;
  totalFrames: number;
  onFrameChange: (frame: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentFrame, totalFrames, onFrameChange }) => {
  const handlFrameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFrameChange(Number(e.target.value));
  };

  return (
    <div className="progress-bar mt-2">
      <input 
        type="range" 
        min="0" 
        max={totalFrames - 1} 
        value={currentFrame} 
        onChange={handlFrameChange} 
        className="w-full"
      />
    </div>
  );
};

export default ProgressBar;