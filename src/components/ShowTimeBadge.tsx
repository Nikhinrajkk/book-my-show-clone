
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
      className={`rounded-md px-4 py-2 text-center min-w-[96px] h-[38px] flex flex-col justify-center cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-amber-500 text-white' 
          : 'bg-white text-amber-500 border border-amber-500'
      }`}
    >
      <div className="text-base font-medium">{time}</div>
      <div className="text-xs">{format}</div>
    </div>
  );
};

export default ShowTimeBadge;
