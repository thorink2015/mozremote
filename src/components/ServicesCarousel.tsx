import { useState, useEffect } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Service {
  icon: LucideIcon;
  name: string;
  link?: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export const ServicesCarousel = ({ services }: ServicesCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <>
      {/* Mobile: Carousel */}
      <div className="block md:hidden">
        {/* Progress Indicators */}
        <div className="flex gap-2 mb-6 px-4">
          {services.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 transition-all duration-300 ${
                index === current
                  ? "bg-primary"
                  : "bg-border/30"
              }`}
            />
          ))}
        </div>

        <Carousel 
          className="w-full" 
          setApi={setApi}
          opts={{ 
            align: "start",
            loop: false,
            skipSnaps: false,
            dragFree: false
          }}
        >
          <CarouselContent className="-mx-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="px-4 basis-full">
                <div className="relative">
                  {service.link ? (
                    <Link to={service.link}>
                      <ServiceCard icon={service.icon} name={service.name} />
                    </Link>
                  ) : (
                    <ServiceCard icon={service.icon} name={service.name} />
                  )}
                  
                  {/* Arrow at bottom right - positioned absolutely */}
                  {index < services.length - 1 && (
                    <button 
                      onClick={handleNext}
                      className="absolute bottom-3 right-4 hover:scale-110 transition-transform cursor-pointer"
                      aria-label="Next slide"
                    >
                      <svg 
                        className="w-6 h-6 text-primary animate-pulse" 
                        style={{ animationDuration: '3s' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Swipe hint text */}
        <div className="text-center mt-4">
          <p className="text-sm text-foreground/50">Свайпните для продолжения →</p>
        </div>
      </div>

      {/* Desktop: Grid Layout - Hide ROI Calculator */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {services
            .filter(service => !service.name.toLowerCase().includes('roi') && !service.name.toLowerCase().includes('калькулятор'))
            .map((service, index) => (
              service.link ? (
                <Link key={index} to={service.link}>
                  <ServiceCard icon={service.icon} name={service.name} />
                </Link>
              ) : (
                <ServiceCard key={index} icon={service.icon} name={service.name} />
              )
            ))}
        </div>
      </div>
    </>
  );
};
