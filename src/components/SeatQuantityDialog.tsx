import React from 'react';

interface SeatQuantityDialogProps {
  isOpen: boolean;
  handleSelectSeats: (seats: number) => void;
}

const SeatQuantityDialog: React.FC<SeatQuantityDialogProps> = ({ isOpen, handleSelectSeats }) => {
  const [selectedQuantity, setSelectedQuantity] = React.useState<number>(2);
  
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/80" />
      <div className="relative bg-white rounded-lg w-full max-w-[515px] mx-4 p-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">How Many Seats?</h2>
        </div>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="w-32">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <img 
                src="/image.png" 
                alt="Scooter" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {quantities.map((qty) => (
              <button
                key={qty}
                onClick={() => setSelectedQuantity(qty)}
                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm transition-colors
                  ${selectedQuantity === qty 
                    ? 'bg-[#f84464] text-white' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                {qty}
              </button>
            ))}
          </div>
          
          <div className="flex w-full justify-center text-center text-xs gap-4">
            <div className="p-2">
              <p className="text-gray-500">SCREEN 1</p>
              <p className="font-medium">Rs. 180</p>
              <p className="text-amber-500">Filling Fast</p>
            </div>
            <div className="p-2">
              <p className="text-gray-500">SCREEN1 SOFA</p>
              <p className="font-medium">Rs. 260</p>
              <p className="text-amber-500">Almost Full</p>
            </div>
          </div>
          
          <button 
            onClick={() => handleSelectSeats(selectedQuantity)}
            className="w-[400px] h-10 py-2 px-4 bg-[#f84464] hover:bg-red-[#f84464] text-white rounded-md transition-colors text-xs"
          >
            Select Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatQuantityDialog;
