
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Define seat types
type SeatStatus = 'available' | 'sold' | 'selected';

interface SeatData {
  id: string;
  row: string;
  number: number;
  status: SeatStatus;
}

const SeatSelectionGrid: React.FC = () => {
  const [seats, setSeats] = useState<Record<string, SeatData[]>>(generateSeats());
  
  // Generate seat data
  function generateSeats(): Record<string, SeatData[]> {
    // First section - Premium rows (M, L, K)
    const premiumRows = ['M', 'L', 'K'];
    // Second section - Standard rows (J through A)
    const standardRows = ['J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    const allRows = [...premiumRows, ...standardRows];
    
    const seatsByRow: Record<string, SeatData[]> = {};
    
    allRows.forEach(row => {
      const maxSeats = row === 'M' || row === 'L' ? 10 : 20;
      seatsByRow[row] = [];
      
      for (let i = 1; i <= maxSeats; i++) {
        // Default to sold for most seats
        let status: SeatStatus = 'sold';
        
        // Make specific seats available based on the reference image
        if ((row === 'M' && i === 1) || 
            (row === 'L' && i === 4) ||
            (row === 'C' && [2, 3, 7, 8, 9, 11].includes(i)) ||
            (row === 'B' && i >= 3 && i <= 20) ||
            (row === 'A' && i >= 1 && i <= 20)) {
          status = 'available';
        }
        
        // Set selected seats (green in the image)
        if ((row === 'M' && i === 1) || (row === 'L' && i === 4)) {
          status = 'selected';
        }
        
        seatsByRow[row].push({
          id: `${row}${i}`,
          row,
          number: i,
          status
        });
      }
    });
    
    return seatsByRow;
  }

  const handleSeatClick = (seat: SeatData) => {
    if (seat.status === 'sold') return;
    
    const newSeats = { ...seats };
    const rowSeats = [...newSeats[seat.row]];
    const seatIndex = rowSeats.findIndex(s => s.id === seat.id);
    
    rowSeats[seatIndex] = {
      ...seat,
      status: seat.status === 'available' ? 'selected' : 'available'
    };
    
    newSeats[seat.row] = rowSeats;
    setSeats(newSeats);
  };
  
  const renderSeat = (seat: SeatData) => {
    let seatClass = "w-6 h-6 flex items-center justify-center text-xs rounded-sm mx-0.5 my-1 ";
    
    switch (seat.status) {
      case 'available':
        seatClass += "border border-green-500 text-green-500 cursor-pointer hover:bg-green-50";
        break;
      case 'selected':
        seatClass += "bg-green-500 text-white cursor-pointer";
        break;
      case 'sold':
        seatClass += "bg-gray-200 text-gray-400 cursor-not-allowed";
        break;
    }
    
    return (
      <div 
        key={seat.id} 
        className={seatClass}
        onClick={() => handleSeatClick(seat)}
      >
        {seat.status !== 'sold' && seat.number}
      </div>
    );
  };

  // Get rows grouped by section
  const premiumRows = ['M', 'L', 'K'];
  const standardRows = ['J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  
  return (
    <div className="flex flex-col items-center">
      {/* Premium section */}
      <div className="w-full mb-4">
        <div className="text-center py-2 border-b border-gray-200">
          <div className="text-sm text-gray-600">Rs. 260 SCREEN1 SOFA</div>
        </div>
        
        <div className="flex flex-col items-center space-y-1 mt-2">
          {premiumRows.map(row => (
            <div key={row} className="flex items-center">
              <div className="w-6 text-center text-gray-500">{row}</div>
              <div className="flex flex-wrap justify-center">
                {seats[row]?.map(seat => renderSeat(seat))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standard section */}
      <div className="w-full">
        <div className="text-center py-2 border-b border-gray-200">
          <div className="text-sm text-gray-600">Rs. 180 SCREEN 1</div>
        </div>
        
        <div className="flex flex-col items-center space-y-1 mt-2">
          {standardRows.map(row => (
            <div key={row} className="flex items-center">
              <div className="w-6 text-center text-gray-500">{row}</div>
              <div className="flex flex-wrap justify-center">
                {seats[row]?.map(seat => renderSeat(seat))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionGrid;
