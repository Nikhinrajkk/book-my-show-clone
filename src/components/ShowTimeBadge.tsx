
import React from 'react';

interface ShowTimeBadgeProps {
  time: string;
  format?: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

const ShowTimeBadge: React.FC<ShowTimeBadgeProps> = ({ 
  time, 
  format, 
  isSelected, 
  onClick, 
  className = ''
}) => {
  return (
    <button 
      onClick={onClick}
      className={`
        flex flex-col justify-center items-center
        min-w-[96px] h-[38px] px-2 py-1 rounded
        ${isSelected 
          ? 'bg-amber-500 text-white' 
          : 'bg-white border border-amber-500 text-amber-500'}
        hover:opacity-90
        ${className}
      `}
    >
      <span className="text-sm font-medium">{time}</span>
      {format && <span className="text-[10px]">{format}</span>}
    </button>
  );
};

export default ShowTimeBadge;
