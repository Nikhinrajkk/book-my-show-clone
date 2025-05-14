
import React from 'react';
import { Mail, Headphones, Ticket } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#333338] text-gray-300 pt-4 mt-10">
      {/* List your show banner */}
      <div className="bg-[#333338] py-3 max-w-[1240px] w-[92%] mx-auto">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <span className="font-semibold text-white">List your Show</span>
              <p className="text-xs md:text-sm hidden md:block">Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</p>
            </div>
          </div>
          <Button className="bg-bms-red hover:bg-bms-red/90 mt-3 md:mt-0 whitespace-nowrap">
            Contact today!
          </Button>
        </div>
      </div>
      
      {/* Customer support section */}
      <div className="w-full mx-auto  bg-[#404043] ">

      <div className=" mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-[1240px] w-[92%] ">
        <div className="flex flex-col items-center">
          <div className="mb-3 border border-gray-500 rounded-full p-3">
            <Headphones size={30} strokeWidth={1} />
          </div>
          <h3 className="uppercase text-xs tracking-wider">24/7 CUSTOMER CARE</h3>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="mb-3 border border-gray-500 rounded-full p-3">
            <Ticket size={30} strokeWidth={1} />
          </div>
          <h3 className="uppercase text-xs tracking-wider">RESEND BOOKING CONFIRMATION</h3>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="mb-3 border border-gray-500 rounded-full p-3">
            <Mail size={30} strokeWidth={1} />
          </div>
          <h3 className="uppercase text-xs tracking-wider">SUBSCRIBE TO THE NEWSLETTER</h3>
        </div>
      </div>

      </div>

      
      {/* Movies categories */}
      <div className="bg-[#333338] py-6 max-w-[1240px] w-[92%] mx-auto">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">MOVIES NOW SHOWING</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Raid 2 | Final Destination Bloodlines | Mission: Impossible - The Final Reckoning | Tourist Family | #Single | HIT: The Third Case | Jai Mata Ji - Let's Rock | Kesari Chapter 2: The Untold Story of Jallianwala Bagh | The House of Dead Horror | Thunderbolts*
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">TOP CINEMAS</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Miraj Cinemas: Geetanjali, Karwar | Miraj Cinemas: Raichur | MR Tower Cinema: Fazilka | Mission Shakti Cinemas: Jaipur Town | Mini Siddartha 2K A/c Digital Surround:Madanapalle | MSR Movie Land: Punganur | Milan Talkies: Rajganpur | Movietime Cinemas: Omaxe Novelty Mall, Amritsar | Mohiddin Talkies: Gangavati | MOVIE TIME: HUB, Goregaon (E)
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">TOP CINEMAS CHAINS IN INDIA</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Justickets | PVR | INOX | Miraj Cinemas | Cinepolis | K.Sera Sera Box Office Pvt. Ltd. | Asian Cinemas | Gold Cinema | Cinepolis P&A | MOVIETIME
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">UPCOMING MOVIES</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Final Destination Bloodlines | IPL T20 2025 Live Screening-(MI VS DC) | Rhythm | Light House | Mor Chhaintha Bhuinya 3 | Oru Vadakkan Pranaya Parvvam | Takila | Written & Directed by God | Back Benchers | Mana Kutumbam | Shaunki Sardar | Samshayam | Eleven | Surprise | Devil's Double Next Level | Maqam | Banjara | Posco 307 | The Real Kerala Story | Jora Kalya Thattunga
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">MOVIES BY GENRE</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Drama Movies | Thriller Movies | Comedy Movies | Action Movies | Family Movies | Adventure Movies | Romantic Movies | Horror Movies | Fantasy Movies | Crime Movies | Historical Movies | Supernatural Movies | Animation Movies | Mystery Movies | Sci-Fi Movies | Anime Movies | Biography Movies | Period Movies | Suspense Movies | Musical Movies | Classic Movies | Political Movies | Sports Movies | War Movies | Devotional Movies | Adult Movies | Noir Movies | Mythological Movies | Heist Movies | Screening Movies | Psychological Movies | Tragedy Movies | Adaptation Movies | Bollywood Movies
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">MOVIES BY FORMAT</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Movies in 2D | Movies in 4DX | Movies in MX4D | Movies in 3D | Movies in IMAX 2D | Movies in ICE | Movies in 4DX 3D | Movies in 2D SCREEN X | Movies in IMAX 3D | Movies in 7D | Movies in 3D SCREEN X | Movies in MX4D 3D | Movies in Full Dome
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">COUNTRIES</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Indonesia | Singapore | UAE | Sri Lanka | West Indies
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">HELP</h4>
            <p className="text-xs text-gray-400 leading-loose">
              About Us | Contact Us | Current Opening | Press Release | Press Coverage | Sitemap | FAQs | Terms and Conditions | Privacy Policy
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">BOOKMYSHOW EXCLUSIVES</h4>
            <p className="text-xs text-gray-400 leading-loose">
              Lollapalooza India | BookAChange | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream | Movie Trailers | Summer Activities
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">NEW YEAR EVE & CHRISTMAS CELEBRATION</h4>
            <p className="text-xs text-gray-400 leading-loose">
              New Year Parties | Christmas | Dinner Experience | Live Performances | Nature Trails | Staycation | Unique Experiences
            </p>
          </div>
        </div>
      </div>
      
      {/* Logo and social media */}
      <div className="container mx-auto py-8 flex flex-col items-center">
        <div className="mb-8">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-white">book</span>
            <span className="text-bms-red">my</span>
            <span className="text-white">show</span>
          </div>
        </div>
        
        <div className="flex gap-4 mb-8">
          {['facebook', 'twitter', 'instagram', 'youtube', 'pinterest', 'linkedin'].map((social) => (
            <a key={social} href={`https://${social}.com`} className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="sr-only">{social}</span>
              {/* We'll use simplified icons for social media */}
              <div className="text-gray-300 text-xs uppercase">{social.charAt(0)}</div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#333338] py-4 text-center text-xs text-gray-400 max-w-[1240px] w-[92%] mx-auto">
        <div className="container mx-auto px-4">
          <p>Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
          <p className="mt-2">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
