
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  highlight?: string;
  description: string;
  ctaText?: string;
  ctaDescription?: string;
  feeNote?: string;
  backgroundImage: string;
  backgroundColor: string;
}

interface HeroBannerProps {
  items: BannerItem[];
  autoScrollInterval?: number;
}

const HeroBanner = ({ items, autoScrollInterval = 5000 }: HeroBannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Auto scroll functionality
  useEffect(() => {
    if (autoScrollInterval > 0) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, autoScrollInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoScrollInterval, items.length]);

  // Pause auto scroll on hover
  const pauseAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto scroll after hover
  const resumeAutoScroll = () => {
    if (!intervalRef.current && autoScrollInterval > 0) {
      intervalRef.current = window.setInterval(() => {
        nextSlide();
      }, autoScrollInterval);
    }
  };

  return (
    <div 
      ref={carouselRef}
      className="relative w-full overflow-hidden" 
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
    >
      <div className="flex">
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div 
          className="flex transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="min-w-full px-2 sm:px-4"
            >
              <div 
                className="relative mx-auto flex h-64 sm:h-80 w-full max-w-[1200px] overflow-hidden rounded-lg"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div 
                  className="relative w-full h-full flex items-center"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent" />
                  
                  <div className="relative z-10 px-6 sm:px-10 py-6 w-3/5 text-white">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl sm:text-4xl font-bold">{item.title}</h2>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{item.subtitle} <span className="text-yellow-300">{item.highlight}</span></h3>
                      <p className="text-sm sm:text-base mb-4">{item.description}</p>
                      
                      {item.ctaText && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="py-2 px-4 bg-yellow-400 text-blue-900 font-bold sm:text-lg">
                            {item.ctaText}
                          </div>
                          
                          {item.ctaDescription && (
                            <div className="py-2 px-4 bg-blue-800 text-white font-bold sm:text-lg">
                              {item.ctaDescription}
                            </div>
                          )}
                        </div>
                      )}
                      
                      {item.feeNote && (
                        <p className="text-xs mt-2">{item.feeNote}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white hover:bg-black/40"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === activeIndex ? "w-4 bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
