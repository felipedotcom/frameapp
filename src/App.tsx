import React, { useState, useCallback } from 'react';
import UrlInputForm from '../src/components/UrlInputForm/UrlInputForm';
import UrlList from '../src/components/UrlList/UrlList';
import FramePlayer from '../src/components/FramePlayer/FramePlayer';

interface UrlItem {
  name: string;
  url: string;
}

const App: React.FC = () => {
  const [urlList, setUrlList] = useState<UrlItem[]>([]);
  const [fps, setFps] = useState<number>(0.2);

  const addUrl = useCallback((url: string) => {
    const newUrl: UrlItem = {
      name: `URL ${urlList.length + 1}`,
      url
    };
    setUrlList(prevList => [...prevList, newUrl]);
  }, [urlList.length]);

  const removeUrl = useCallback((index: number) => {
    setUrlList(prevList => prevList.filter((_, i) => i !== index));
  }, []);

  const handleFpsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFps(parseFloat(e.target.value));
  }, []);

  return (
    <div className="app text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Frame Player App</h1>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <UrlInputForm addUrl={addUrl} />
          <UrlList urlList={urlList} removeUrl={removeUrl} />
        </div>
        <div className="w-1/2">
          <FramePlayer 
            key={urlList.map(item => item.url).join(',')} 
            frames={urlList.map(item => item.url)} 
            fps={fps} 
            handleFpsChange={handleFpsChange} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;