
import React from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShowTimeBadge from '@/components/ShowTimeBadge';
import SeatSelectionGrid from '@/components/SeatSelectionGrid';
import SeatLegend from '@/components/SeatLegend';

const SeatLayout = () => {
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
            <p className="text-xs text-gray-500">Vanitha Cineplex RGB Laser 4K 3D ATMOS: Edappally | Wednesday,May 14, 2025, 06:45 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">2 Tickets</span>
          <button className="text-gray-500">
            <X size={20} />
          </button>
        </div>
      </header>

      <div className="p-4 overflow-auto flex-1 flex flex-col items-center">
        {/* Show time badges */}
        <div className="flex gap-4 mb-8 w-full max-w-3xl">
          <ShowTimeBadge 
            time="06:45 PM" 
            format="4K LASER ATMOS" 
            isSelected={true} 
          />
          <ShowTimeBadge 
            time="10:00 PM" 
            format="4K LASER ATMOS" 
            isSelected={false} 
          />
        </div>

        {/* Main content */}
        <div className="w-full max-w-3xl space-y-4 mb-8">
          {/* Screen prices */}
          <div className="text-center py-2 border-b border-gray-200">
            <div className="text-sm text-gray-600">Rs. 260 SCREEN1 SOFA</div>
          </div>

          {/* Seat grid */}
          <SeatSelectionGrid />

          {/* Screen indicator */}
          <div className="relative py-8 flex justify-center">
            <div className="w-2/3 h-4 bg-blue-100 rounded-t-3xl opacity-70"></div>
            <div className="absolute bottom-0 w-full text-center text-sm text-gray-500">
              All eyes this way please!
            </div>
          </div>

          {/* Seat legend */}
          <SeatLegend />
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;
