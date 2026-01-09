import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  slidesToShow?: number;
  className?: string;
}

export function Carousel({ 
  children, 
  autoplay = false, 
  autoplaySpeed = 4000,
  slidesToShow = 1,
  className = ''
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (autoplay && !isHovered && totalSlides > slidesToShow) {
      const interval = setInterval(next, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplaySpeed, isHovered, next, totalSlides, slidesToShow]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {children.map((child, index) => (
            <div 
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {totalSlides > slidesToShow && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/80 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 transition-all ${
                  index === currentIndex 
                    ? 'bg-[#D4AF37] w-8' 
                    : 'bg-[#D4AF37]/30 hover:bg-[#D4AF37]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface InfiniteCarouselProps {
  children: React.ReactNode[];
  speed?: number;
  slidesToShow?: number;
}

export function InfiniteCarousel({ children, speed = 30, slidesToShow = 6 }: InfiniteCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate children to create seamless loop
  const extendedChildren = [...children, ...children, ...children];

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`flex ${isHovered ? '' : 'animate-scroll'}`}
        style={{
          animation: isHovered ? 'none' : `scroll ${speed}s linear infinite`,
        }}
      >
        {extendedChildren.map((child, index) => (
          <div 
            key={index}
            className="flex-shrink-0 px-2"
            style={{ width: `${100 / slidesToShow}%` }}
          >
            {child}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
