
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
