import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronRight, Star, Share, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { LoginDialog } from "@/components/login";
import { getMovies, getSession, makePayment } from "@/api";

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
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/mohanlal-1502-24-03-2017-12-30-59.jpg"
  },
  {
    id: 2,
    name: "Shobana",
    role: "as Lalitha Shanmughan",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/shobana-2730-1659090871.jpg"
  },
  {
    id: 3,
    name: "Maniyanpilla Raju",
    role: "as Kuttichan",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/maniyanpilla-raju-18342-24-03-2017-17-51-27.jpg"
  },
  {
    id: 4,
    name: "Irshad Ali",
    role: "as Shaji",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/irshad-ali-iein111375-16-10-2017-16-27-26.jpg"
  },
  {
    id: 5,
    name: "Binu Pappu",
    role: "as SI Benny",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/binu-pappu-2027314-1690198877.jpg"
  },
  {
    id: 6,
    name: "Farhan Fazil",
    role: "as CPO Sudheesh",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/farhaan-faasil-1047111-18-01-2022-03-50-42.jpg"
  }
];

// Mock Data for Crew
const crewMembers: CrewMember[] = [
  {
    id: 1,
    name: "Tharun Moorthy",
    role: "Director, Screenplay",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/tharun-moorthy-2009111-10-02-2021-01-20-11.jpg"
  },
  {
    id: 2,
    name: "M.Renjith",
    role: "Producer",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mrenjith-2046750-1745064965.jpg"
  },
  {
    id: 3,
    name: "Jakes Bejoy",
    role: "Musician",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/jakes-bejoy-1050437-17-05-2019-03-06-39.jpg"
  },
  {
    id: 4,
    name: "Avantika Renjith",
    role: "Executive Producer",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/avantika-renjith-2046752-1745065424.jpg"
  },
  {
    id: 5,
    name: "K.R.Sunil",
    role: "Screenplay",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/krsunil-2046751-1745065117.jpg"
  },
  {
    id: 6,
    name: "Shaji Kumar",
    role: "Cinematographer",
    imageUrl: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shaji-kumar-1091875-10-04-2018-01-00-27.jpg"
  }
];

// Review Tags
const reviewTags: ReviewTag[] = [
  { id: 1, tag: "#GreatActing", count: 52825 },
  { id: 2, tag: "#SuperDirection", count: 51151 },
  { id: 3, tag: "#Wellmade", count: 38772 },
  { id: 4, tag: "#Blockbuster", count: 35570 },
  { id: 5, tag: "#Amazing", count: 30000 },
];

const MovieDetailPage = () => {
  const [session, setSession] = useState(null);

  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  interface Movie {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
    upvotes?: number;
    runtime?: string;
    genre?: string;
    release_date?: string;
    // Add other movie properties as needed
  }

  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getSession();
        setSession(data);
        const response = await getMovies();
        // const movieResp = response.data.find((mov: any) => mov.id === id);
        console.log(id);
        console.log(response);
        const movieResp = response[1];
        setMovie(movieResp);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />

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
                <ChevronDown className="h-4 w-4" />
              </div>
              {session ? (
                <div className="flex items-center gap-2">
                  <img
                    src={session.user?.user_metadata?.avatar_url}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{session.user?.user_metadata?.full_name}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2" />
              )}
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
            backgroundSize: "cover",
            opacity: 0.4,
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto relative z-0 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Movie Poster Card */}
            <div className="w-full md:w-[261px] flex-shrink-0 mb-6 md:mb-0 h-[392px]">
              <div className="relative rounded-lg overflow-hidden shadow-lg w-[] h-[392px]">
                <img
                  src="https://jdswukniiyawdpfkpvjn.supabase.co/storage/v1/object/public/vibe-bucket/movies/thudarum.png"
                  alt="Thudarum"
                  className="w-[261px] h-[392px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-2">
                  <p className="text-white text-sm">In cinemas</p>
                </div>
                <button className="absolute top-4 left-4 bg-black/70 text-white text-sm rounded-md px-2 py-1 flex items-center">
                  <span className="mr-1 flex items-center justify-center bg-white/20 rounded-full w-5 h-5">
                    ▶
                  </span>
                  Trailers (4)
                </button>
              </div>
            </div>

            {/* Movie Details */}
            <div className="md:pl-8 flex-grow text-white">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold">{movie?.title}</h1>
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
                    <span className="text-sm text-gray-400">
                      ({movie?.upvotes} Votes)
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <Button className="ml-4 bg-white text-black hover:bg-gray-200">
                  Rate now
                </Button>
              </div>

              {/* Movie Format & Languages */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="text-white border-gray-600 bg-transparent px-3 py-1 rounded-md"
                >
                  2D
                </Badge>
                <Badge
                  variant="outline"
                  className="text-white border-gray-600 bg-transparent px-3 py-1 rounded-md"
                >
                  Malayalam, Telugu
                </Badge>
              </div>

              {/* Movie Meta Information */}
              <div className="text-gray-400 mb-8">
                <span>{movie?.runtime}</span>
                <span className="mx-2">•</span>
                <span>{movie?.genre}</span>
                <span className="mx-2">•</span>
                <span>U/A 16+</span>
                <span className="mx-2">•</span>
                <span>{movie?.release_date}</span>
              </div>

              {/* Book Tickets Button */}
              <Button
                className="bg-[#F84464] hover:bg-[#F84464]/90 text-white px-10 py-6 text-lg rounded-md"
                onClick={() => {
                  localStorage.setItem("selectedMovie", JSON.stringify(movie));

                  navigate("/select-theater");
                }}
              >
                Book tickets
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Description */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">About the movie</h2>
        <p className="text-gray-700 mb-6">{movie?.description}</p>

        <div className="border-b border-gray-200 my-8"></div>

        {/* Cast Section */}
        <h2 className="text-2xl font-bold mb-6">Cast</h2>
        <Carousel className="mb-8">
          <CarouselContent>
            {castMembers.map((member) => (
              <CarouselItem key={member.id} className="basis-1/5">
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
const NavItem = ({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) => (
  <a
    href="#"
    className={`py-3 px-1 text-sm font-medium ${
      active
        ? "text-red-500 border-b-2 border-red-500"
        : "text-gray-700 hover:text-red-500"
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
    <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-0.5 text-sm rounded">
      {count}
    </span>
  </div>
);

export default MovieDetailPage;
