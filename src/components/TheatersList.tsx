import React from 'react';
import { Heart, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@/components/ui/hover-card';
import { Link } from 'react-router-dom';

interface ShowTime {
  time: string;
  format?: string;
}

interface Theater {
  id: string;
  name: string;
  location: string;
  cancellable: boolean;
  showTimes: ShowTime[];
}

interface TheaterListProps {
  theaters: Theater[];
}

const TheatersList: React.FC<TheaterListProps> = ({ theaters }) => {
  return (
    <div className="container mx-auto mt-4 px-4 pb-8 max-w-[80%]">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-bms-green"></div>
            <span className="text-sm text-gray-600">AVAILABLE</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-bms-yellow"></div>
            <span className="text-sm text-gray-600">FAST FILLING</span>
          </div>
          <div className="flex items-center gap-1">
            <Badge className="bg-white border border-gray-300 text-blue-600 hover:bg-white px-1 py-0 h-5 text-xs">LAN</Badge>
            <span className="text-sm text-gray-600">SUBTITLES LANGUAGE</span>
          </div>
        </div>
      </div>

      {/* Theater List */}
      <div className="space-y-6 bg-white">
        {theaters.map((theater) => (
          <TheaterItem key={theater.id} theater={theater} />
        ))}
      </div>
    </div>
  );
};

const TheaterItem: React.FC<{ theater: Theater }> = ({ theater }) => {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Heart className="text-gray-400 hover:text-bms-red cursor-pointer" size={18} />
          <h3 className="font-medium">{theater.name}</h3>
          <Info className="text-gray-400" size={16} />
        </div>
        <div className="text-xs text-gray-500">
          {theater.cancellable ? "Cancellation Available" : "Non-cancellable"}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        {theater.showTimes.map((show, index) => (
          <ShowTimeWithTooltip key={index} show={show} />
        ))}
      </div>
    </div>
  );
};

const ShowTimeWithTooltip: React.FC<{ show: ShowTime }> = ({ show }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link to="/seat-layout">
          <div className="border border-[#cccccc] rounded-md text-center flex-col justify-center items-center flex-wrap cursor-pointer w-[105px] h-[40px] px-[10px] py-[5px] hover:border-bms-green text-bms-green">
            <div className="text-xs">{show.time}</div>
            {show.format && <div className="text-[8px] text-gray-500">{show.format}</div>}
          </div>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto p-0 shadow-lg rounded-lg overflow-hidden border-0">
        <div className="bg-white">
          <div className="grid grid-cols-4 text-center">
            <div className="p-3 flex flex-col">
              <span className="text-base">₹ 700.00</span>
              <span className="text-xs">RECLINER</span>
              <span className="text-xs text-amber-500">Almost Full</span>
            </div>
            <div className="p-3 flex flex-col">
              <span className="text-base">₹ 330.00</span>
              <span className="text-xs">ELITE</span>
              <span className="text-xs text-amber-500">Almost Full</span>
            </div>
            <div className="p-3 flex flex-col">
              <span className="text-base">₹ 280.00</span>
              <span className="text-xs">PRIME</span>
              <span className="text-xs text-bms-green">Available</span>
            </div>
            <div className="p-3 flex flex-col">
              <span className="text-base">₹ 210.00</span>
              <span className="text-xs">CLASSIC</span>
              <span className="text-xs text-bms-green">Available</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TheatersList;
