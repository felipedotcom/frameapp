import React from 'react';

interface UrlListItem {
  name: string;
  url: string;
}

interface UrlListProps {
  urlList: UrlListItem[];
  removeUrl: (index: number) => void;
}

const UrlList: React.FC<UrlListProps> = React.memo(({ urlList, removeUrl }) => {
  return (
    <div className="text-left mt-4">
      <ul>
        {urlList.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{item.name}</span>
            <button 
              onClick={() => removeUrl(index)} 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default UrlList;