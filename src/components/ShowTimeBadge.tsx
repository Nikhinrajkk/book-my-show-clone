
import React from 'react';

interface ShowTimeBadgeProps {
  time: string;
  format: string;
  isSelected: boolean;
  onClick?: () => void;
}

const ShowTimeBadge: React.FC<ShowTimeBadgeProps> = ({ time, format, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`rounded-md px-4 py-2 text-center min-w-24 cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-amber-500 text-white border-amber-600 border' 
          : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
      }`}
    >
      <div className="text-sm font-medium">{time}</div>
      <div className="text-[10px]">{format}</div>
    </div>
  );
};

export default ShowTimeBadge;
