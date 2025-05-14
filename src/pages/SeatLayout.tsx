import React, { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ShowTimeBadge from "@/components/ShowTimeBadge";
import SeatSelectionGrid from "@/components/SeatSelectionGrid";
import SeatLegend from "@/components/SeatLegend";
import SeatQuantityDialog from "@/components/SeatQuantityDialog";

type SeatStatus = 'available' | 'sold' | 'selected';

interface SeatData {
  id: string;
  row: string;
  number: number;
  status: SeatStatus;
}

const SeatLayout = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("06:45 PM");
  const [showSeatDialog, setShowSeatDialog] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = React.useState<number>(2);
  const [selectedSeats, setSelectedSeats] = React.useState<SeatData[]>([]);

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleSeatClick = (seat: SeatData) => {

    // Check if the seat is already selected
    if (selectedSeats.some((s) => s.id === seat.id)) {
      // Remove the seat if it's already selected
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id));
    } else {
      // Add the seat if it's not selected
      setSelectedSeats([...selectedSeats, seat]);
    }
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
            <p className="text-xs text-gray-500">
              Vanitha Cineplex RGB Laser 4K 3D ATMOS: Edappally | Wednesday, May
              14, 2025, 06:45 PM
            </p>
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
          <div className="flex gap-4 w-[90%] items-center">
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
          <SeatSelectionGrid onSeatClick={handleSeatClick} 
            selectedSeats={selectedSeats}
            maxSeats={selectedQuantity}
          />

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
      {selectedQuantity === selectedSeats.length && (
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-center">
          <div className="max-w-3xl mx-auto">
            <Button className="w-[400px] h-[40px] bg-[#f84464] hover:bg-red-600" onClick={() => {
              localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
              navigate("/order/1");
            }}>
              Proceed
            </Button>
          </div>
        </div>
      )}

      <SeatQuantityDialog
        isOpen={showSeatDialog}
        handleSelectSeats={(selectedQuantity) => {
          setSelectedQuantity(selectedQuantity);
          setShowSeatDialog(false);
        }}
      />
    </div>
  );
};

export default SeatLayout;
