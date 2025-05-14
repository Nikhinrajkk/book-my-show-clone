
import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

const FilterOptions: React.FC = () => {
  return (
    <div className="container mx-auto flex items-center justify-center border-b border-t py-4 max-w-[80%]">
      <div className="grid grid-cols-4 w-full">
        <div className="border-r flex justify-center">
          <div className="border rounded-md p-2 flex gap-2 items-center cursor-pointer relative hover:border-gray-400 group">
            <button className="text-sm">English - 2D</button>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
        </div>
        
        <div className="border-r flex justify-center">
          <div className="border rounded-md p-2 flex gap-2 items-center cursor-pointer relative hover:border-gray-400 group">
            <button className="text-sm">Price Range</button>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
        </div>
        
        <div className="border-r flex justify-center">
          <div className="border rounded-md p-2 flex gap-2 items-center cursor-pointer relative hover:border-gray-400 group">
            <button className="text-sm">Preferred Time</button>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="border rounded-md p-2 flex justify-center items-center cursor-pointer hover:border-gray-400">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
