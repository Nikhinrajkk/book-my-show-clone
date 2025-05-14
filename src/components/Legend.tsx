import { CircleDot } from "lucide-react";

const Legend = () => {
  return (
    <div className="bg-white py-3 px-4  border-b ">
      <div className="container mx-auto max-w-[80%] flex items-center text-xs text-gray-600 bg-white">
        <div className="flex items-center mr-6">
          <span className="inline-flex items-center justify-center bg-green-100 text-green-800 text-[10px] font-medium px-1 py-0.5 rounded mr-1">
            LAN
          </span>
          <span>indicates subtitle language, if subtitles are available</span>
          <span className="ml-1 text-bms-red font-medium">Got it</span>
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <CircleDot className="w-4 h-4 text-green-500 mr-1" />
            <span>AVAILABLE</span>
          </div>
          <div className="flex items-center">
            <CircleDot className="w-4 h-4 text-yellow-500 mr-1" />
            <span>FAST FILLING</span>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 text-[10px] font-medium px-1 py-0.5 rounded mr-1">
              LAN
            </span>
            <span>SUBTITLES LANGUAGE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
