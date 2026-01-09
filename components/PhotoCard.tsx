
import React from 'react';
import { Photo } from '../types';

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="flex flex-col items-center group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-4 w-full">
        <p className="text-gray-800 font-medium text-center text-base md:text-lg truncate group-hover:text-blue-600 transition-colors duration-300">
          {photo.title}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
