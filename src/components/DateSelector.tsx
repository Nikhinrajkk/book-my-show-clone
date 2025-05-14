
import React from 'react';

interface DateProps {
  day: string;
  date: string;
  month: string;
  isSelected?: boolean;
}

const DateItem: React.FC<DateProps> = ({ day, date, month, isSelected }) => {
  return (
    <div className={`flex flex-col items-center justify-center px-4 py-3 rounded-md cursor-pointer min-w-[60px] ${
      isSelected ? 'bg-bms-red text-white' : 'hover:bg-gray-100'
    }`}>
      <span className="text-xs font-medium">{day}</span>
      <span className="text-xl font-bold">{date}</span>
      <span className="text-xs uppercase">{month}</span>
    </div>
  );
};

const DateSelector = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-2">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto gap-2 no-scrollbar py-2">
          <DateItem day="SAT" date="17" month="MAY" isSelected={true} />
          <DateItem day="SUN" date="18" month="MAY" />
          <DateItem day="MON" date="19" month="MAY" />
          <DateItem day="TUE" date="20" month="MAY" />
          <DateItem day="WED" date="21" month="MAY" />
          <DateItem day="THU" date="22" month="MAY" />
          <DateItem day="FRI" date="23" month="MAY" />
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
