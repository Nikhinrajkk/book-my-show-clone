import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Movie data type
interface Movie {
  id: number;
  title: string;
  genres: string[];
  rating: number;
  votes?: string;
  likes?: string;
  imageUrl: string;
}

// Movie data
const recommendedMovies: Movie[] = [
  {
    id: 1,
    title: "Thudarum",
    genres: ["Drama", "Family", "Thriller"],
    rating: 9.3,
    votes: "139.3K",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    id: 2,
    title: "Prince and Family",
    genres: ["Comedy", "Drama", "Family"],
    rating: 8.9,
    votes: "6.8K",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 3,
    title: "Padakkalam",
    genres: ["Comedy", "Drama", "Fantasy", "Supernatural"],
    rating: 9,
    votes: "3.9K",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    id: 4,
    title: "Final Destination Bloodlines",
    genres: ["Horror", "Supernatural", "Thriller"],
    rating: 0,
    votes: "", // empty string to fix the TS error
    likes: "73.2K",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    id: 5,
    title: "Sarkeet",
    genres: ["Drama", "Family"],
    rating: 9,
    votes: "1.7K",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  }
];

// Event category data
interface EventCategory {
  id: number;
  title: string;
  count: number;
  color: string;
  imageUrl: string;
}

const eventCategories: EventCategory[] = [
  {
    id: 1,
    title: "COMEDY SHOWS",
    count: 10,
    color: "bg-purple-500",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "AMUSEMENT PARK",
    count: 4,
    color: "bg-blue-400",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    id: 3,
    title: "KIDS",
    count: 5,
    color: "bg-blue-400",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 4,
    title: "MUSIC SHOWS",
    count: 5,
    color: "bg-purple-400",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 5,
    title: "WORKSHOPS & MORE",
    count: 6,
    color: "bg-red-400",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  }
];

const MovieHomePage = () => {
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
              <Input
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full px-4 py-2 rounded-md"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2">Kochi</span>
                <ChevronRight className="h-4 w-4" />
              </div>
              <Button className="bg-red-500 hover:bg-red-600">Sign in</Button>
              <Button variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-8">
                <NavItem label="Movies" active />
                <NavItem label="Stream" />
                <NavItem label="Events" />
                <NavItem label="Plays" />
                <NavItem label="Sports" />
                <NavItem label="Activities" />
              </div>
              <div className="flex space-x-8">
                <NavItem label="ListYourShow" />
                <NavItem label="Corporates" />
                <NavItem label="Offers" />
                <NavItem label="Gift Cards" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-4">
        {/* Main Carousel */}
        <div className="relative mb-8">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="h-96 bg-black relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                      alt="Carousel" 
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center pl-16">
                      <div className="text-white">
                        <h2 className="text-5xl font-bold mb-2">Unlock ₹500 off*</h2>
                        <h3 className="text-4xl font-bold mb-6">on LIVE gigs</h3>
                        <Button className="bg-red-500 hover:bg-red-600 px-8 py-6 text-lg">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className="h-2 w-2 bg-white rounded-full opacity-100"></div>
            <div className="h-2 w-2 bg-white rounded-full opacity-50"></div>
          </div>
        </div>
        
        {/* Recommended Movies */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Recommended Movies</h2>
            <Link to="/all-movies" className="text-red-500 flex items-center">
              See All <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {recommendedMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        
        {/* Stream Banner */}
        <div className="mb-8">
          <div className="h-32 bg-[#0c111f] rounded-lg overflow-hidden relative">
            <div className="flex h-full items-center justify-between px-10">
              <div className="text-white">
                <span className="text-white text-xl font-bold">book</span>
                <span className="text-red-500 text-xl font-bold">my</span>
                <span className="text-white text-xl font-bold">show</span>
                <h3 className="text-4xl font-bold">STREAM</h3>
              </div>
              <h2 className="text-3xl font-bold text-yellow-400">Endless Entertainment Anytime. Anywhere!</h2>
            </div>
          </div>
        </div>
        
        {/* Live Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Best Of Live Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventCategories.map(category => (
              <EventCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>
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

// Movie Card Component
const MovieCard = ({ movie }: { movie: Movie }) => (
  <Link to={`/movie/${movie.id}`} className="block">
    <div className="rounded-lg overflow-hidden bg-white shadow">
      <div className="h-64 bg-gray-200 relative">
        <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          {movie.likes ? (
            <>
              <svg className="w-5 h-5 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-green-500 font-bold">{movie.likes} Likes</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="text-red-500 font-bold">{movie.rating}/10</span>
              <span className="ml-2 text-gray-600">{movie.votes} Votes</span>
            </>
          )}
        </div>
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.genres.join("/")}</p>
      </div>
    </div>
  </Link>
);

// Event Category Card
const EventCategoryCard = ({ category }: { category: EventCategory }) => (
  <div className={`rounded-lg overflow-hidden relative h-72 ${category.color}`}>
    <div className="absolute inset-0 flex flex-col justify-between p-6">
      <div>
        <h3 className="text-white text-2xl font-extrabold leading-tight">{category.title}</h3>
        <p className="text-white font-bold mt-2">
          {category.count > 9 ? `${category.count}+` : category.count} Events
        </p>
      </div>
      <div className="h-20">
        <img src={category.imageUrl} alt={category.title} className="absolute bottom-0 right-0 h-40 object-contain" />
      </div>
    </div>
  </div>
);

export default MovieHomePage;