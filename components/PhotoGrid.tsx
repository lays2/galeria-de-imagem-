
import React from 'react';
import { Photo } from '../types';
import PhotoCard from './PhotoCard';

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500 animate-fade-in">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-xl font-medium">Nenhuma foto encontrada</p>
        <p className="text-gray-400 mt-2">Tente buscar por termos diferentes.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
