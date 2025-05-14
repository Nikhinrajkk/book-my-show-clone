import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginDialog } from "@/components/login";
import { getMovies, getSession, handleLogout } from "@/api";
import Footer from "@/components/Footer";

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

interface MovieApiResponse {
  id: number;
  title: string;
  genre: string;
  rating: string | null;
  upvotes: string;
  poster_url: string;
}

function mapMoviesToRecommended(input: MovieApiResponse[]): Movie[] {
  return input.map(movie => ({
    id: movie.id,
    title: movie.title,
    genres: movie.genre.split(',').map((g: string) => g.trim()),
    rating: movie.rating ? parseFloat(movie.rating) : 0,
    votes: movie.rating ? movie.upvotes : "",
    imageUrl: movie.poster_url
  }));
}

// Movie data

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
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  
  useEffect(() => {
    const fetchSession = async () => {
      const data = await getSession();
      setSession(data);
      const apiMovies = await getMovies();
      const mappedMovies = mapMoviesToRecommended(apiMovies);
      setMovies(prevMovies => [...prevMovies, ...mappedMovies]);
    };
    fetchSession();
  }, []);

  useEffect(() => {
    console.log('session from home pageee',session)
  }, [session])

  const logout = async () => {
    await handleLogout();
    setSession(null);
  }
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto max-w-[85%] px-4">
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
                <ChevronDown className="h-4 w-4" />
              </div>
              {session?.user?.user_metadata?.name ? (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img 
                      src={session.user.user_metadata?.avatar_url} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Hi, {session.user.user_metadata?.full_name}</span>
                </div>
              ) : (
                <Button 
                  className="bg-red-500 hover:bg-red-600"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Sign in
                </Button>
              )}
              <Button onClick={() => logout()} variant="ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="container mx-auto max-w-[85%] px-4">
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
          <Carousel className="w-[85%] mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="h-[297px] bg-black relative rounded-lg overflow-hidden">
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
              <CarouselItem>
                <div className="h-[297px] bg-black relative rounded-lg overflow-hidden">
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
            <h2 className="text-2xl font-bold text-gray-800 mx-[100px]">Recommended Movies</h2>
            <Link to="/all-movies" className="text-red-500 flex items-center">
              See All <ChevronRight className="h-4 w-4 mr-[100px]" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-[100px]">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        
        {/* Stream Banner */}
        <div className="mb-8 mx-[100px]">
          <div className="h-32 w-full rounded-lg overflow-hidden relative">
            <img 
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
              alt="Stream Banner"
              className="w-auto object-cover"
            />
          </div>
        </div>
        
        {/* Live Events */}
        <div className="mb-8    mx-[100px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Best Of Live Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {eventCategories.map(category => (
              <EventCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </main>

      <Footer />

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
    <div className="rounded-lg overflow-hidden">
      <div className="aspect-[2/3] relative">
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        {/* Rating overlay at bottom */}
        <div className="p-2 bg-black rounded-b-lg">
          <div className="flex items-center">
            {movie.likes ? (
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span className="text-green-500 font-bold text-sm">{movie.likes} Likes</span>
              </div>
            ) : (
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-red-500 font-bold text-sm">{movie.rating}/10</span>
                <span className="ml-2 text-white text-xs">{movie.votes} Votes</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-base text-gray-900 mb-1">{movie.title}</h3>
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