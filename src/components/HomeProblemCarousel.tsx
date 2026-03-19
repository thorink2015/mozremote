import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const problems = [
  {
    badge: "ПО ОТДЕЛЬНОСТИ",
    badgeColor: "bg-red-900/30 border-red-500/40 text-red-400",
    items: [
      "Deal Shield: $199",
      "Term-Sheet Sprint: $299",
      "Manager Triangulation: $149",
      "Underwriting Wall: $99",
      "Negative Screening: $129",
      "Negotiation Syndicate: $89",
      "Investor SOS: $199",
      "Exit Simulator: $79",
      "ROI Calculator: Включён"
    ]
  },
  {
    badge: "ПРОБЛЕМА",
    badgeColor: "bg-red-900/30 border-red-500/40 text-red-400",
    items: [
      "Дорого за раз",
      "Ограниченный доступ",
      "Нет базы знаний",
      "Нет комьюнити",
      "Нет обновлений",
      "Один на один",
      "Нет поддержки",
      "Риски остаются"
    ],
    itemIcon: X
  },
  {
    badge: "В КОМЬЮНИТИ",
    badgeColor: "bg-primary/20 border-primary/40 text-primary",
    items: [
      "$59/месяц",
      "ВСЕ 9 сервисов",
      "Без ограничений",
      "База знаний 100+",
      "Комьюнити 24/7",
      "Еженедельные обновления",
      "Коллективный опыт",
      "Защита капитала"
    ],
    itemIcon: CheckCircle
  }
];

export const HomeProblemCarousel = () => {
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
          {problems.map((_, index) => (
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
            {problems.map((problem, index) => (
              <CarouselItem key={index} className="px-4 basis-full">
                <Card className={`p-6 bg-card/40 backdrop-blur-md border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] rounded-[7px] relative ${index < problems.length - 1 ? 'pb-8' : 'pb-6'}`}>
                  <Badge className={`${problem.badgeColor} mb-4`}>
                    {problem.badge}
                  </Badge>
                  
                  <ul className="space-y-3">
                    {problem.items.map((item, i) => {
                      const ItemIcon = problem.itemIcon;
                      return (
                        <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                          {ItemIcon && <ItemIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                          <span className={ItemIcon === X ? "text-red-300/90" : ""}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  
                  {/* Arrow at bottom right */}
                  {index < problems.length - 1 && (
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

      {/* Desktop: Grid Layout (2 columns + 1 column) */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {/* First Row: 2 Columns */}
        <div className="flex justify-center gap-6 mb-6">
          {problems.slice(0, 2).map((problem, index) => (
            <Card key={index} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] w-fit max-w-md">
              <Badge className={`${problem.badgeColor} mb-4`}>
                {problem.badge}
              </Badge>
              
              <ul className="space-y-3">
                {problem.items.map((item, i) => {
                  const ItemIcon = problem.itemIcon;
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      {ItemIcon && <ItemIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                      <span className={ItemIcon === X ? "text-red-300/90" : "text-foreground/80"}>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          ))}
        </div>

        {/* Second Row: Full Width Community Card */}
        <div className="flex justify-center">
          {(() => {
            const problem = problems[2];
            return (
              <Card className="p-8 bg-card/40 backdrop-blur-md border border-primary/20 rounded-[7px] w-fit max-w-[920px] bg-gradient-to-br from-primary/5 to-transparent">
                <Badge className={`${problem.badgeColor} mb-4`}>
                  {problem.badge}
                </Badge>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {problem.items.map((item, i) => {
                    const ItemIcon = problem.itemIcon;
                    return (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        {ItemIcon && <ItemIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            );
          })()}
        </div>
      </div>
    </>
  );
};
