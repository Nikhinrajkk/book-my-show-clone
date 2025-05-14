
import React, { useState } from 'react';
import FilterOptions from './FilterOptions';
import { CircleDot, Languages } from 'lucide-react';

interface DateProps {
  day: string;
  date: string;
  month: string;
  isSelected?: boolean;
  onClick: () => void;
}

const DateItem: React.FC<DateProps> = ({ day, date, month, isSelected, onClick }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center px-4 py-3 rounded-md cursor-pointer min-w-[60px] ${
        isSelected ? 'bg-bms-red text-white' : 'hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <span className="text-xs font-medium">{day}</span>
      <span className="text-xl font-bold">{date}</span>
      <span className="text-xs uppercase">{month}</span>
    </div>
  );
};

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState("17"); // Default to the first date (17)
  
  const dateItems = [
    { day: "SAT", date: "17", month: "MAY" },
    { day: "SUN", date: "18", month: "MAY" },
    { day: "MON", date: "19", month: "MAY" },
    { day: "TUE", date: "20", month: "MAY" },
    { day: "WED", date: "21", month: "MAY" },
    { day: "THU", date: "22", month: "MAY" },
    { day: "FRI", date: "23", month: "MAY" },
  ];
  
  return (
    <div className="w-full bg-white border-b border-gray-200 py-2 shadow-[0px_2px_4px_0.5px_rgba(0,0,0,0.2)]">
      {/* Subtitle language indicator */}
      <div className="container mx-auto px-4 max-w-[80%] border-b pb-2 mb-2 flex items-center text-xs text-gray-600">
        <div className="flex items-center mr-6">
          <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-[10px] font-medium px-1 py-0.5 rounded mr-1">LAN</span>
          <span>indicates subtitle language, if subtitles are available</span>
          <span className="ml-1 text-bms-red font-medium">Got it</span>
        </div>
        
        <div className="flex-1"></div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <CircleDot className="w-4 h-4 text-green-500 mr-1" />
            <span>AVAILABLE</span>
          </div>
          <div className="flex items-center">
            <CircleDot className="w-4 h-4 text-yellow-500 mr-1" />
            <span>FAST FILLING</span>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-[10px] font-medium px-1 py-0.5 rounded mr-1">LAN</span>
            <span>SUBTITLES LANGUAGE</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[80%] flex justify-between">
        <div className="flex overflow-x-auto gap-2 no-scrollbar py-2">
          {dateItems.map((item) => (
            <DateItem 
              key={item.date}
              day={item.day} 
              date={item.date} 
              month={item.month} 
              isSelected={selectedDate === item.date}
              onClick={() => setSelectedDate(item.date)}
            />
          ))}
        </div>

        <FilterOptions />
      </div>
    </div>
  );
};

export default DateSelector;
