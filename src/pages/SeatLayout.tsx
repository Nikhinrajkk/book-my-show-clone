
import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ShowTimeBadge from '@/components/ShowTimeBadge';
import SeatSelectionGrid from '@/components/SeatSelectionGrid';
import SeatLegend from '@/components/SeatLegend';

const SeatLayout = () => {
  const [selectedTime, setSelectedTime] = useState("06:45 PM");
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/select-theater" className="text-gray-700">
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="font-semibold text-lg">Prince and Family</h1>
            <p className="text-xs text-gray-500">Vanitha Cineplex RGB Laser 4K 3D ATMOS: Edappally | Wednesday, May 14, 2025, 06:45 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">2 Tickets</span>
          <button className="text-gray-500">
            <X size={20} />
          </button>
        </div>
      </header>

      <div className="w-full flex flex-col items-center">
        {/* Show time badges */}
        <div className="w-full bg-[#f5f5fa] flex justify-center border-b h-[58px]">

        <div className="flex gap-4 w-[90%]">
          <ShowTimeBadge 
            time="06:45 PM" 
            format="4K LASER ATMOS" 
            isSelected={selectedTime === "06:45 PM"} 
            onClick={() => handleTimeSelection("06:45 PM")}
            />
          <ShowTimeBadge 
            time="10:00 PM" 
            format="4K LASER ATMOS" 
            isSelected={selectedTime === "10:00 PM"} 
            onClick={() => handleTimeSelection("10:00 PM")}
            />
        </div>
            </div>

        {/* Main content */}
        <div className="w-full space-y-4 mb-8 bg-[#fafafa]">
          {/* Seat grid */}
          <SeatSelectionGrid />

          {/* Screen indicator - styled to match the provided HTML */}
          <div className="relative max-w-3xl py-6 flex flex-col items-center mt-4 mx-auto">
            <div className="w-2/3 h-3 bg-gray-300 rounded-t-3xl opacity-70 shadow-lg"></div>
            <div className="text-center text-sm text-gray-500 mt-2">
              All eyes this way please!
            </div>
          </div>

          {/* Seat legend */}
          <SeatLegend />
        </div>
      </div>
      
      {/* Proceed button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-3xl mx-auto">
          <Button className="w-full bg-red-500 hover:bg-red-600">Proceed</Button>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
