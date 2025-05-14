
import React from 'react';

const SeatLegend: React.FC = () => {
  return (
    <div className="flex justify-center gap-8 py-4 border-t border-gray-200 mt-2 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border border-green-500"></div>
        <span className="text-sm text-gray-600">Available</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-green-500"></div>
        <span className="text-sm text-gray-600">Selected</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-gray-200"></div>
        <span className="text-sm text-gray-600">Sold</span>
      </div>
    </div>
  );
};

export default SeatLegend;
