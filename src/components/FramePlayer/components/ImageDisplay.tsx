import React from 'react';

interface ImageDisplayProps {
  src: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src }) => {
  return (
    <div className="image-display w-full h-64 flex justify-center items-center overflow-hidden border rounded-lg mb-4 bg-gray-100">
      <img src={src} alt="Frame" className="object-contain h-full" />
    </div>
  );
};

export default ImageDisplay;