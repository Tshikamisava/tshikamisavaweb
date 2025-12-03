import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Wifi, Handshake, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  onExplore: () => void;
}

const iconMap = {
  code: Code,
  palette: Palette,
  wifi: Wifi,
  handshake: Handshake,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0, onExplore }) => {
  const Icon = iconMap[service.icon];
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Entrance Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play Carousel
  useEffect(() => {
    // Don't auto-advance if hovered or if there's only 1 image
    if (isHovered || service.imageUrls.length <= 1) return;

    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => 
        prev === service.imageUrls.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearTimeout(timer);
  }, [currentImageIndex, isHovered, service.imageUrls.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.imageUrls.length - 1 : prev - 1
    );
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    nextImage();
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    prevImage();
  };

  return (
    <div 
      ref={elementRef}
      className={`h-full transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full cursor-pointer"
        onClick={onExplore}
      >
        {/* Image Carousel Container */}
        <div className="h-48 overflow-hidden relative">
          {service.imageUrls.map((img, idx) => (
             <div 
               key={idx}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                 idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
               }`}
             >
                <img 
                  src={img} 
                  alt={`${service.title} - ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
             </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none"></div>

          {/* Navigation Arrows (Visible on Hover) */}
          {service.imageUrls.length > 1 && (
            <>
              <button 
                onClick={handlePrevClick}
                className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-brand-red text-white rounded-full flex items-center justify-center transition-opacity duration-300 z-10 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextClick}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-brand-red text-white rounded-full flex items-center justify-center transition-opacity duration-300 z-10 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {service.imageUrls.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-brand-red w-3' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-8 pt-12 relative flex-1 flex flex-col">
          <div className="absolute -top-8 left-8 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-red-50 group-hover:border-brand-red/20 transition-all duration-300 z-20 group-hover:scale-110 group-hover:shadow-red-500/30">
            <Icon className="w-8 h-8 text-brand-red transform transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
            {service.description}
          </p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onExplore();
            }}
            className="flex items-center text-brand-red font-semibold text-sm gap-1 group-hover:gap-2 transition-all duration-300 mt-auto self-start focus:outline-none"
          >
             <span>Explore Service</span>
             <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};