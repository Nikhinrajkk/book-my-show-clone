
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface MovieHeaderProps {
  title: string;
  certification: string;
  genres: string[];
}

const MovieHeader: React.FC<MovieHeaderProps> = ({ 
  title, 
  certification, 
  genres 
}) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="rounded-full border border-gray-300 bg-white text-gray-700">
            {certification}
          </Badge>
          {genres.map((genre, index) => (
            <Badge 
              key={index}
              variant="outline" 
              className="rounded-full border border-gray-300 bg-white text-gray-700"
            >
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
