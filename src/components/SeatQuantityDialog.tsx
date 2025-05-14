
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-medium">How Many Seats?</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-4">
          <div className="w-32">
            <AspectRatio ratio={1}>
              <img 
                src="/lovable-uploads/482e12c9-5d21-4e1e-9444-94066ae3367d.png" 
                alt="Scooter" 
                className="w-full h-full object-contain"
              />
            </AspectRatio>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {quantities.map((qty) => (
              <button
                key={qty}
                onClick={() => setSelectedQuantity(qty)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                  ${selectedQuantity === qty 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300'}`}
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
          
          <Button 
            onClick={handleSelectSeats}
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            Select Seats
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeatQuantityDialog;
