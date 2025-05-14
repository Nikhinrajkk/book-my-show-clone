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
  
  // Generate seat data based on the provided HTML structure and image
  function generateSeats(): Record<string, SeatData[]> {
    // First section - Premium rows (M, L, K)
    const premiumRows = ['M', 'L', 'K'];
    // Second section - Standard rows (J through A)
    const standardRows = ['J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    const allRows = [...premiumRows, ...standardRows];
    
    const seatsByRow: Record<string, SeatData[]> = {};
    
    allRows.forEach(row => {
      seatsByRow[row] = [];
      const maxSeats = 20; // All rows have up to 20 seats
      
      for (let i = 1; i <= maxSeats; i++) {
        // Default to sold for most seats
        let status: SeatStatus = 'sold';
        
        // Make specific seats available based on the reference image
        if (
          // Premium section available seats
          (row === 'M' && [7, 8, 9,].includes(i)) ||
          (row === 'L' && (i === 3 || i === 10)) ||
          (row === 'K' && i === 14) ||
          // Standard section available seats
          (row === 'E' && i === 16) ||
          (row === 'D' && [6, 18, 19, 20].includes(i)) ||
          (row === 'C' && [4, 5, 6, 17, 18, 19, 20].includes(i)) ||
          (row === 'B' && i >= 1 && i <= 20) ||
          (row === 'A' && i >= 1 && i <= 20)
        ) {
          status = 'available';
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
    // Empty seat pattern based on the reference image
    const shouldRenderEmpty = (
      // M row empty seats
      (seat.row === 'M' && (seat.number < 5 || seat.number > 18)) ||
      // L row empty seats
      (seat.row === 'L' && (seat.number < 5 || seat.number > 18)) ||
      // K row empty seats
      (seat.row === 'K' && (seat.number < 5 || seat.number > 18)) ||
      // Standard section empty seats (first two spots in each row)
      ((seat.row === 'J' || seat.row === 'H' || seat.row === 'G' || 
        seat.row === 'F' || seat.row === 'E' || seat.row === 'D' || 
        seat.row === 'C' || seat.row === 'B' || seat.row === 'A') && seat.number < 3)
    );
    
    if (shouldRenderEmpty) {
      return <div className="seatI w-6 h-6 mx-0.5 my-1">&nbsp;</div>;
    }
    
    let seatClass = "w-6 h-6 flex items-center justify-center text-xs rounded-[2px] m-1 ";
    
    switch (seat.status) {
      case 'available':
        seatClass += "border border-[#1ea83c] text-[#1ea83c] cursor-pointer hover:bg-green-50";
        break;
      case 'selected':
        seatClass += "bg-[#1ea83c] text-white cursor-pointer";
        break;
      case 'sold':
        seatClass += "bg-[#eee] cursor-not-allowed";
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
    <div className="flex flex-col items-center bg-[#fafafa]">
      {/* Premium section */}
      <div className="w-full mb-4">
        <div className="text-center py-2 border-b border-gray-200">
          <div className="text-sm text-gray-600">Rs. 260 SCREEN1 SOFA</div>
        </div>
        
        <div className="flex flex-col items-center space-y-1 mt-2">
          {premiumRows.map(row => (
            <div key={row} className="flex items-center">
              <div className="w-6 text-center text-[#b3b3b3] text-sm mr-1.5 ">{row}</div>
              <div className="flex flex-wrap justify-center">
                {seats[row]?.map((seat) => (
                  <React.Fragment key={seat.id}>
                    {renderSeat(seat)}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Standard section */}
      <div className="w-full">
        <div className="text-center py-2 border-b border-gray-200">
          <div className="text-sm text-gray-600">Rs. 180 SCREEN 1</div>
        </div>
        
        <div className="flex flex-col items-center space-y-1 mt-2">
          {standardRows.map(row => (
            <div key={row} className="flex items-center">
              <div className="w-6 text-center text-[#b3b3b3] text-sm mr-1.5 mt-2.5">{row}</div>
              <div className="flex flex-wrap justify-center">
                {seats[row]?.map((seat) => (
                  <React.Fragment key={seat.id}>
                    {renderSeat(seat)}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionGrid;
