
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="container mx-auto py-3 px-4 flex justify-between items-center max-w-[80%]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-xl font-bold flex items-center">
            <span className="text-black">book</span>
            <span className="text-bms-red">my</span>
            <span className="text-black">show</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <div className="absolute left-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <Input 
            placeholder="Search for Movies, Events, Plays, Sports and Activities" 
            className="pl-10 pr-4 py-1 border border-gray-300 rounded-md w-full"
          />
        </div>
        
        {/* Location and User */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="font-medium">Kochi</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          </div>
          
          <Button variant="ghost" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            </div>
            <span className="hidden md:inline">Hi, Guest</span>
          </Button>
        </div>
      </div>
      
      {/* Navigation Links */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-[80%]">
          <nav className="flex overflow-x-auto no-scrollbar">
            <NavItem label="Movies" active />
            <NavItem label="Stream" />
            <NavItem label="Events" />
            <NavItem label="Plays" />
            <NavItem label="Sports" />
            <NavItem label="Activities" />
            
            <div className="flex-grow"></div>
            
            <NavItem label="ListYourShow" />
            <NavItem label="Corporates" />
            <NavItem label="Offers" />
            <NavItem label="Gift Cards" />
          </nav>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  label: string;
  active?: boolean;
}

const NavItem = ({ label, active }: NavItemProps) => (
  <a href="#" className={`whitespace-nowrap py-3 mr-6 text-sm font-medium ${active ? 'text-bms-red border-b-2 border-bms-red' : 'text-gray-700 hover:text-bms-red'}`}>
    {label}
  </a>
);

export default Navbar;
