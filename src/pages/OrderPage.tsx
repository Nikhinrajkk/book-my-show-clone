import React, { useState } from "react";
import { ChevronLeft, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { makePayment } from "@/api";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
}

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Regular Popcorn",
    description: "Regular Popcorn",
    price: 70,
    image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020004_27082024145536.png",
    isVeg: true
  },
  {
    id: 2,
    name: "Caramel Popcorn",
    description: "Caramel Popcorn",
    price: 115,
    image: "https://in.bmscdn.com/fnb/v3/xxhdpi/1020004_27082024145536.png",
    isVeg: true
  }
];

const OrderPage = () => {
  const [selectedItems, setSelectedItems] = useState<{[key: number]: number}>({});
  const [isDonating, setIsDonating] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState("m-ticket");
  
  const ticketPrice = 360;
  const convenienceFee = 51.92;
  const donation = isDonating ? 2 : 0;
  
  const calculateSubtotal = () => {
    return ticketPrice + convenienceFee;
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + donation;
  };
  
  const addItem = (itemId: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const payNow = () => {
    const data = makePayment()
  }
  
  const subtotal = calculateSubtotal();
  const total = calculateTotal();
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between ">
        <div className="flex items-center">
          <ChevronLeft className="h-6 w-6 text-gray-500" />
          <div className="ml-4">
            <h1 className="font-semibold text-lg">Thudarum</h1>
            <p className="text-sm text-gray-500">New Central Talkies Dolby Atmos 2K and 3D: Thripun | Wednesday,May 14, 2025, 09:30 PM</p>
          </div>
        </div>
        <X className="h-6 w-6 text-gray-500" />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Food Menu */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Grab a <span className="text-red-500">bite!</span></h2>
            <p className="text-gray-600 mt-2">
              Now get your favorite snack at a <span className="text-red-500">discounted price!</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4 flex">
                  <div className="flex-shrink-0 mr-4">
                    {item.isVeg && (
                      <div className="border border-green-500 inline-block p-0.5 mb-2">
                        <div className="bg-green-500 h-2 w-2 rounded-full"></div>
                      </div>
                    )}
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold">₹{item.price}</span>
                      <Button 
                        onClick={() => addItem(item.id)} 
                        className="h-8 rounded-full px-4 text-sm bg-white text-red-500 border border-red-500 hover:bg-red-50"
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p className="font-medium text-gray-600">Note:</p>
            <p>1. Images are for representation purposes only.</p>
            <p>2. Prices inclusive of taxes.</p>
            <p>3. All nutritional information is indicative, values are per serve as shared by the Cinema and may vary depending on the ingredients and portion size.</p>
            <p>4. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.</p>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="md:col-span-1">
          <Card className="mb-4 relative">
            {/* Left cutout */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-r-full"></div>
            {/* Right cutout */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-l-full"></div>
            <CardContent className="p-4">
              <h3 className="text-red-500 text-lg font-medium mb-4">BOOKING SUMMARY</h3>
              
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <div>
                    <span className="font-medium">GOLD - M8, M9</span>
                    <span className="text-xs text-gray-500"> (2 Tickets)</span>
                  </div>
                  <span>Rs. {ticketPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500">SCREEN 1</p>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <Info className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">Convenience fees</span>
                </div>
                <span>Rs.{convenienceFee}</span>
              </div>
              
              <div className="border-t border-b py-3 my-2">
                <div className="flex justify-between font-medium">
                  <span>Sub total</span>
                  <span>Rs.{subtotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center">
                  <span className="font-medium">Donate to BookAChange</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Rs. {isDonating ? '2' : '0'}</span>
                  <button 
                    onClick={() => setIsDonating(!isDonating)}
                    className={`text-xs ${isDonating ? 'text-gray-500' : 'text-red-500'}`}
                  >
                    {isDonating ? '' : 'Add Rs. 2'}
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-gray-500">(₹1 per ticket has been added)</p>
              <button className="text-xs text-blue-500 mt-1">VIEW T&C</button>
              
              <div className="mt-4">
                <p className="text-sm">
                  Your current state is <span className="text-red-500">Kerala</span>
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Amount Payable</span>
              <span className="font-medium">Rs.{total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h3 className="text-gray-500 font-medium mb-4">SELECT TICKET TYPE</h3>
            
            <div className="flex justify-start mb-4">
              <div className="flex items-center pr-3">
                <input 
                  type="radio" 
                  id="m-ticket" 
                  name="ticketType" 
                  checked={selectedTicketType === "m-ticket"}
                  onChange={() => setSelectedTicketType("m-ticket")}
                  className="w-5 h-5 text-red-500"
                />
                <div className="ml-3 flex items-center">
                  <label htmlFor="m-ticket" className="text-blue-500 font-medium">M-Ticket</label>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="box-office" 
                  name="ticketType" 
                  checked={selectedTicketType === "box-office"}
                  onChange={() => setSelectedTicketType("box-office")}
                  className="w-5 h-5 text-red-500"
                />
                <div className="ml-3 flex items-center">
                  <div>
                    <label htmlFor="box-office" className="text-gray-700 font-medium">Box Office Pickup</label>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600">Show the m-ticket QR Code on your mobile to enter the cinema.</p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center text-sm">
              <Info className="h-4 w-4 mr-2 text-gray-500" />
              <p className="text-gray-600">
                By proceeding, I express my consent to complete this transaction.
              </p>
            </div>
          </div>
          
          <Button onClick={payNow} className="w-full bg-red-500 hover:bg-red-600 text-white rounded-md py-3 flex justify-between items-center">
            <span className="font-medium">TOTAL: Rs.{total.toFixed(2)}</span>
            <span>Proceed</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
