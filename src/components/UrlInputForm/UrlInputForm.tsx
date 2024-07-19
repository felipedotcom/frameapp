import React, { useState } from 'react';

interface UrlInputFormProps {
  addUrl: (url: string) => void;
}

const UrlInputForm: React.FC<UrlInputFormProps> = ({ addUrl }) => {
  const [currentUrl, setCurrentUrl] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentUrl(e.target.value);
  };

  const handleAddUrl = () => {
    if (currentUrl) {
      addUrl(currentUrl);
      setCurrentUrl('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddUrl();
    }
  };

  return (
    <div className="mt-4">
      <div className="flex">
        <input 
          type="text" 
          value={currentUrl} 
          onChange={handleInputChange} 
          onKeyPress={handleKeyPress} 
          placeholder="Coloque a URL" 
          className="border rounded px-2 py-1 mr-2 flex-grow"
        />
        <button 
          onClick={handleAddUrl} 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Adicione a URL
        </button>
      </div>
    </div>
  );
};

export default UrlInputForm;
