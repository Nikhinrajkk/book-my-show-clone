import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Star, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";

// Cast Member Interface
interface CastMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

// Crew Member Interface
interface CrewMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

// Review Tag Interface
interface ReviewTag {
  id: number;
  tag: string;
  count: number;
}

// Mock Data for Cast
const castMembers: CastMember[] = [
  {
    id: 1,
    name: "Mohanlal",
    role: "as Shanmughan",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 2,
    name: "Shobana",
    role: "as Lalitha Shanmughan",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    name: "Maniyanpilla Raju",
    role: "as Kuttichan",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 4,
    name: "Irshad Ali",
    role: "as Shaji",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 5,
    name: "Binu Pappu",
    role: "as SI Benny",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 6,
    name: "Farhan Fazil",
    role: "as CPO Sudheesh",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

// Mock Data for Crew
const crewMembers: CrewMember[] = [
  {
    id: 1,
    name: "Tharun Moorthy",
    role: "Director, Screenplay",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    name: "M.Renjith",
    role: "Producer",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: 3,
    name: "Jakes Bejoy",
    role: "Musician",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 4,
    name: "Avantika Renjith",
    role: "Executive Producer",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 5,
    name: "K.R.Sunil",
    role: "Screenplay",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 6,
    name: "Shaji Kumar",
    role: "Cinematographer",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

// Review Tags
const reviewTags: ReviewTag[] = [
  { id: 1, tag: "#GreatActing", count: 52825 },
  { id: 2, tag: "#SuperDirection", count: 51151 },
  { id: 3, tag: "#Wellmade", count: 38772 },
  { id: 4, tag: "#Blockbuster", count: 35570 },
  { id: 5, tag: "#Amazing", count: 30000 }
];

const MovieDetailPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold">
                <span className="text-black">book</span>
                <span className="text-red-500">my</span>
                <span className="text-black">show</span>
              </Link>
            </div>
            
            <div className="relative flex-grow max-w-xl mx-6">
              <input
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2">Kochi</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <Button className="bg-red-500 hover:bg-red-600">Sign in</Button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8">
              <NavItem label="Movies" active />
              <NavItem label="Stream" />
              <NavItem label="Events" />
              <NavItem label="Plays" />
              <NavItem label="Sports" />
              <NavItem label="Activities" />
              <NavItem label="ListYourShow" />
              <NavItem label="Corporates" />
              <NavItem label="Offers" />
              <NavItem label="Gift Cards" />
            </div>
          </div>
        </nav>
      </header>
      
      {/* Hero Section - Enhanced to match the image exactly */}
      <section className="relative bg-[#121212]">
        {/* Background image overlay with proper gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-0"
          style={{
            backgroundImage: `url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/thudarum-et00442565-1745136818.jpg')`,
            backgroundSize: 'cover',
            opacity: 0.4,
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto relative z-0 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Movie Poster Card */}
            <div className="w-full md:w-80 flex-shrink-0 mb-6 md:mb-0">
              <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-gray-800">
                <img 
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thudarum-et00442565-1745136818.jpg" 
                  alt="Thudarum" 
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-2">
                  <p className="text-white text-sm">In cinemas</p>
                </div>
                <button className="absolute top-4 left-4 bg-black/70 text-white text-sm rounded-md px-2 py-1 flex items-center">
                  <span className="mr-1 flex items-center justify-center bg-white/20 rounded-full w-5 h-5">▶</span>
                  Trailers (4)
                </button>
              </div>
            </div>
            
            {/* Movie Details */}
            <div className="md:pl-8 flex-grow text-white">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold">Thudarum</h1>
                <Button variant="ghost" className="text-white">
                  <Share className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-[#2d2d2d] rounded-md pr-4">
                  <div className="flex items-center px-3 py-2">
                    <Star className="h-6 w-6 text-pink-500 fill-pink-500" />
                    <span className="ml-1 text-xl font-bold">9.3/10</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-400">(139.6K Votes)</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Button className="ml-4 bg-white text-black hover:bg-gray-200">
                  Rate now
                </Button>
              </div>
              
              {/* Movie Format & Languages */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="text-white border-gray-600 bg-transparent px-3 py-1 rounded-md">
                  2D
                </Badge>
                <Badge variant="outline" className="text-white border-gray-600 bg-transparent px-3 py-1 rounded-md">
                  Malayalam, Telugu
                </Badge>
              </div>
              
              {/* Movie Meta Information */}
              <div className="text-gray-400 mb-8">
                <span>2h 46m</span>
                <span className="mx-2">•</span>
                <span>Drama, Family, Thriller</span>
                <span className="mx-2">•</span>
                <span>UA16+</span>
                <span className="mx-2">•</span>
                <span>25 Apr, 2025</span>
              </div>
              
              {/* Book Tickets Button */}
              <Button className="bg-[#F84464] hover:bg-[#F84464]/90 text-white px-10 py-6 text-lg rounded-md" onClick={() => navigate('/select-theater')}>
                Book tickets
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Movie Description */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About the movie</h2>
        <p className="text-gray-700 mb-6">
          In the quiet hill town of Ranni, Pathanamthitta, Shanmughan navigates life as a humble taxi driver. 
          His heart belongs to one thing - his old Ambassador car. To others, it may just be an ageing vehicle, 
          but to Shanmughan, it is like a part of his family. His life, however, is a journey filled with 
          challenges, proving just how far he is willing to go for something so dear to him.
        </p>
        
        <div className="border-b border-gray-200 my-8"></div>
        
        {/* Cast Section */}
        <h2 className="text-2xl font-bold mb-6">Cast</h2>
        <Carousel className="mb-8">
          <CarouselContent>
            {castMembers.map((member) => (
              <CarouselItem key={member.id} className="basis-1/6">
                <CastCard member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0" />
        </Carousel>
        
        <div className="border-b border-gray-200 my-8"></div>
        
        {/* Crew Section */}
        <h2 className="text-2xl font-bold mb-6">Crew</h2>
        <Carousel className="mb-8">
          <CarouselContent>
            {crewMembers.map((member) => (
              <CarouselItem key={member.id} className="basis-1/6">
                <CrewCard member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-0" />
        </Carousel>
        
        <div className="border-b border-gray-200 my-8"></div>
        
        {/* Reviews Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Top reviews</h2>
          <Link to="/reviews" className="text-red-500 flex items-center">
            71.4K reviews <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        
        <p className="text-gray-600 mb-6">Summary of 71.4K reviews.</p>
        
        <ScrollArea className="whitespace-nowrap mb-8">
          <div className="flex space-x-3">
            {reviewTags.map((tag) => (
              <ReviewTag key={tag.id} tag={tag.tag} count={tag.count} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

// Navigation Item component
const NavItem = ({ label, active = false }: { label: string; active?: boolean }) => (
  <a
    href="#"
    className={`py-3 px-1 text-sm font-medium ${
      active ? "text-red-500 border-b-2 border-red-500" : "text-gray-700 hover:text-red-500"
    }`}
  >
    {label}
  </a>
);

// Cast Card Component
const CastCard = ({ member }: { member: CastMember }) => (
  <div className="flex flex-col items-center text-center">
    <Avatar className="w-24 h-24 mb-2">
      <AvatarImage src={member.imageUrl} alt={member.name} />
      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
    </Avatar>
    <h3 className="font-medium text-gray-800">{member.name}</h3>
    <p className="text-sm text-gray-500">{member.role}</p>
  </div>
);

// Crew Card Component
const CrewCard = ({ member }: { member: CrewMember }) => (
  <div className="flex flex-col items-center text-center">
    <Avatar className="w-24 h-24 mb-2">
      <AvatarImage src={member.imageUrl} alt={member.name} />
      <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
    </Avatar>
    <h3 className="font-medium text-gray-800">{member.name}</h3>
    <p className="text-sm text-gray-500">{member.role}</p>
  </div>
);

// Review Tag Component
const ReviewTag = ({ tag, count }: { tag: string; count: number }) => (
  <div className="flex items-center border border-gray-300 rounded-3xl px-4 py-1">
    <span className="text-red-500 font-medium">{tag}</span>
    <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-0.5 text-sm rounded">{count}</span>
  </div>
);

export default MovieDetailPage;
