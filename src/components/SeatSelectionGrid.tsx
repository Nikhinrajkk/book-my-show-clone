
import React from 'react';

// Define seat types
type SeatStatus = 'available' | 'sold' | 'selected';

interface SeatData {
  id: string;
  row: string;
  number: number;
  status: SeatStatus;
}

const SeatSelectionGrid: React.FC = () => {
  // Mock data for seating layout
  const rows = ['M', 'L', 'K', 'J', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  
  // Generate seat data
  const generateSeats = (): Record<string, SeatData[]> => {
    const seatsByRow: Record<string, SeatData[]> = {};
    
    rows.forEach(row => {
      const maxSeats = row === 'M' || row === 'L' ? 10 : 20;
      seatsByRow[row] = [];
      
      for (let i = 1; i <= maxSeats; i++) {
        // Simulate some selected and sold seats
        let status: SeatStatus = 'available';
        
        // Make most seats sold for demonstration
        if (Math.random() > 0.2) {
          status = 'sold';
        }
        
        // Set some specific seats as available or selected for the example
        if ((row === 'M' && i === 1) || (row === 'L' && i === 4)) {
          status = 'available';
        }
        
        if ((row === 'C' && (i === 2 || i === 3 || i === 7 || i === 8 || i === 9 || i === 11)) || 
            (row === 'B' && i >= 3 && i <= 20) ||
            (row === 'A' && i >= 1 && i <= 20)) {
          status = 'available';
        }
        
        // Set some selected seats
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
  };
  
  const seatsByRow = generateSeats();
  
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
      <div key={seat.id} className={seatClass}>
        {seat.status !== 'sold' && seat.number}
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center space-y-1">
      {rows.map(row => (
        <div key={row} className="flex items-center">
          <div className="w-6 text-center text-gray-500">{row}</div>
          <div className="flex flex-wrap justify-center">
            {seatsByRow[row].map(seat => renderSeat(seat))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatSelectionGrid;
