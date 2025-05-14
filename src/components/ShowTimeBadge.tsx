
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
      className={`rounded-md px-4 py-2 text-center min-w-[96px] h-[38px] flex flex-col justify-center items-center cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-[#e8a900] text-white' 
          : 'bg-white text-[#e8a900] border border-[#e8a900]'
      }`}
    >
      <div className="text-[10px]">{time}</div>
      <div className="text-[10px]">{format}</div>
    </div>
  );
};

export default ShowTimeBadge;
