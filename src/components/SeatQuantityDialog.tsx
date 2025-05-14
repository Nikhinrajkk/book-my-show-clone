import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SeatQuantityDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SeatQuantityDialog: React.FC<SeatQuantityDialogProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedQuantity, setSelectedQuantity] = React.useState<number>(2);
  
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const handleSelectSeats = () => {
    navigate('/seat-layout');
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/80" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-[515px] mx-4 p-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold">How Many Seats?</h2>
        </div>
        
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="w-32">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              <img 
                src="/lovable-uploads/482e12c9-5d21-4e1e-9444-94066ae3367d.png" 
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
                    ? 'bg-red-500 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
              >
                {qty}
              </button>
            ))}
          </div>
          
          <div className="flex w-full justify-around text-center text-sm">
            <div className="flex-1 p-2">
              <p className="font-medium">Rs. 180</p>
              <p className="text-gray-500">SCREEN 1</p>
              <p className="text-amber-500">Filling Fast</p>
            </div>
            <div className="flex-1 p-2">
              <p className="font-medium">Rs. 260</p>
              <p className="text-gray-500">SCREEN1 SOFA</p>
              <p className="text-amber-500">Almost Full</p>
            </div>
          </div>
          
          <button 
            onClick={handleSelectSeats}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
          >
            Select Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatQuantityDialog;
