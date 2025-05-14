
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ShowTimeBadge from '@/components/ShowTimeBadge';

// Sample movie data - in a real app, this would come from props or context
const movieData = {
  name: "Prince and Family",
  theater: "Vanitha Cineplex RGB Laser 4K 3D ATMOS",
  location: "Edappally",
  date: "Wednesday, May 14, 2025",
  showtimes: [
    { time: "06:45 PM", format: "4K LASER ATMOS" },
    { time: "10:00 PM", format: "4K LASER ATMOS" },
    { time: "01:30 PM", format: "4K LASER" }
  ]
};

const SelectShowtime: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleContinue = () => {
    if (selectedTime) {
      navigate('/seat-layout');
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-4">
          <Link to="/select-theater" className="text-gray-700">
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1 className="font-semibold text-lg">{movieData.name}</h1>
            <p className="text-xs text-gray-500">{movieData.theater}: {movieData.location} | {movieData.date}</p>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Show time selection section */}
        <div className="py-6 px-4">
          <h2 className="text-lg font-semibold mb-4">Select Showtime</h2>
          
          <div className="flex gap-4 w-[90%] flex-wrap mx-auto">
            {movieData.showtimes.map((show, index) => (
              <ShowTimeBadge 
                key={index}
                time={show.time} 
                format={show.format} 
                isSelected={selectedTime === show.time} 
                onClick={() => handleTimeSelection(show.time)}
              />
            ))}
          </div>
        </div>
        
        {/* Theater details section */}
        <div className="bg-gray-50 p-4">
          <div className="max-w-[90%] mx-auto">
            <h3 className="font-medium mb-2">Theater Details</h3>
            <div className="bg-white rounded-md p-4 shadow-sm">
              <h4 className="font-semibold">{movieData.theater}</h4>
              <p className="text-sm text-gray-500">{movieData.location}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Food & Beverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Parking Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Wheelchair Accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer with continue button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-[90%] mx-auto">
          <Button 
            className={`w-full ${selectedTime ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-300'}`}
            onClick={handleContinue}
            disabled={!selectedTime}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectShowtime;
