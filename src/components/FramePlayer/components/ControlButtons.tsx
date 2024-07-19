import React from 'react';

interface ControlButtonsProps {
  play: () => void;
  pause: () => void;
  isPlaying: boolean;
  fps: number;
  handleFpsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({ play, pause, isPlaying, fps, handleFpsChange }) => {
  return (
    <div className="control-buttons mt-2 flex justify-between items-center">
      <div className="flex items-center">
        {isPlaying ? (
          <button 
            onClick={pause} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Pause
          </button>
        ) : (
          <button 
            onClick={play} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Play
          </button>
        )}
      </div>
      <div className="fps-input flex items-center">
        <label htmlFor="fps" className="mr-2">FPS: </label>
        <input 
          type="number" 
          id="fps" 
          value={fps} 
          onChange={handleFpsChange} 
          min="0.1" 
          step="0.1"
          className="border rounded px-2 py-1 w-16 text-right"
        />
      </div>
    </div>
  );
};

export default ControlButtons;