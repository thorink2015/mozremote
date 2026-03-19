import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const scenarios = [
  {
    id: 1,
    badge: "ПРОДАЛ РАНО",
    title: "Результат",
    items: [
      "Купил за €120K",
      "Через год рынок вырос",
      "Продал за €140K",
      "Прибыль: €20K",
      "Рад результату"
    ],
    type: "start" as const
  },
  {
    id: 2,
    badge: "ЧТО УПУСТИЛ",
    title: "Потерял",
    items: [
      "Через 3 года: €186K",
      "Аренда: €36K",
      "Total: €102K (не €20K)",
      "Потеря: €82K",
      "Торопился без плана"
    ],
    type: "problem" as const
  },
  {
    id: 3,
    badge: "С EXIT SIMULATOR",
    title: "Правильно",
    items: [
      "5 сценариев",
      "Лучший: держать 3г",
      "ROI 85% vs 16.7%",
      "Прибыль €102K",
      "Правильный таймлайн"
    ],
    type: "solution" as const
  }
];

export const ExitSimulatorProblemCarousel = () => {
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
          {scenarios.map((_, index) => (
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
            {scenarios.map((scenario, index) => (
              <CarouselItem key={scenario.id} className="px-4 basis-full">
                <Card className={`p-6 bg-card/40 backdrop-blur-md border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-[7px] relative ${index < scenarios.length - 1 ? 'pb-8' : 'pb-6'}`}>
                  <Badge className={`mb-4 ${
                    scenario.type === "solution"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-primary/10 text-primary border-primary/20"
                  }`}>
                    {scenario.badge}
                  </Badge>
                  <h3 className="font-grotesk text-xl mb-4">{scenario.title}</h3>
                  <ul className="space-y-3">
                    {scenario.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {scenario.type === "problem" ? (
                          <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        ) : scenario.type === "solution" ? (
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        )}
                        <span className={`text-foreground/80 ${scenario.type === "problem" ? "text-red-300/90" : ""}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Arrow at bottom right */}
                  {index < scenarios.length - 1 && (
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
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="text-center mt-4">
          <p className="text-sm text-foreground/50">Свайпните для продолжения →</p>
        </div>
      </div>

      {/* Desktop: 2 rows layout */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {/* First Row: 2 Columns */}
        <div className="flex justify-center gap-6 mb-6">
          {scenarios.slice(0, 2).map((scenario) => (
            <Card key={scenario.id} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] w-fit max-w-md">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {scenario.badge}
              </Badge>
              <h3 className="font-grotesk text-xl mb-4">{scenario.title}</h3>
              <ul className="space-y-3">
                {scenario.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {scenario.type === "problem" ? (
                      <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    )}
                    <span className={`text-foreground/80 ${scenario.type === "problem" ? "text-red-300/90" : ""}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Second Row: Full Width Solution Card */}
        <div className="flex justify-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-md border border-primary/20 rounded-[7px] w-fit max-w-[920px]">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              {scenarios[2].badge}
            </Badge>
            <h3 className="font-grotesk text-xl mb-4">{scenarios[2].title}</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {scenarios[2].items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
};
