import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { AlertTriangle, Lightbulb, DollarSign, Clock, Shield, CheckCircle, XCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const problems = [
  {
    icon: CheckCircle,
    badge: "КАК ОБЫЧНО",
    badgeColor: "bg-green-900/30 border-green-500/40 text-green-400",
    title: "Выбор УК",
    amount: "€120/мес + 12%",
    items: [
      "Первая попавшаяся компания",
      "Знакомый порекомендовал",
      "Не проверил условия"
    ],
    itemIcon: CheckCircle
  },
  {
    icon: XCircle,
    badge: "ЧТО УПУСТИЛ",
    badgeColor: "bg-red-900/30 border-red-500/40 text-red-400",
    items: [
      "Тариф выше на 24%",
      "Скрытые доплаты €200/мес",
      "Плохой SLA (48ч ответ)",
      "Низкий рейтинг (3.2/5)",
      "Кабальные условия"
    ],
    itemIcon: XCircle
  },
  {
    icon: Lightbulb,
    badge: "Manager Triangulation",
    badgeColor: "bg-primary/20 border-primary/40 text-primary",
    title: "С Triangulation",
    verdict: "ЭКОНОМИЯ",
    savings: [
      { text: "€95/мес + 10% (лучший тариф)", icon: DollarSign },
      { text: "€140/мес экономия", icon: DollarSign },
      { text: "Без скрытых доплат", icon: Shield },
      { text: "SLA 2ч ответ", icon: Clock }
    ],
    cost: "$59/мес"
  }
];

export const ManagerTriangulationProblemCarousel = () => {
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
                index === current ? "bg-primary" : "bg-border/30"
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
                  <div className={index === 2 ? "mb-0" : "mb-6"}>
                    <Badge className={`${problem.badgeColor} mb-4`}>
                      {problem.badge}
                    </Badge>
                    {problem.title && (
                      <h3 className="text-xl font-grotesk font-bold mb-2">{problem.title}</h3>
                    )}
                    {problem.amount && (
                      <div className="text-2xl font-bold text-primary mb-4">{problem.amount}</div>
                    )}
                    {problem.verdict && (
                      <div className="space-y-4 mb-0">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-6 h-6 text-primary" />
                          <div className="text-3xl font-bold text-primary">{problem.verdict}</div>
                        </div>
                        {problem.savings && (
                          <ul className="space-y-2">
                            {problem.savings.map((saving, i) => {
                              const SavingIcon = saving.icon;
                              return (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <SavingIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{saving.text}</span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                        <div className="pt-3 border-t border-border/30 pb-0">
                          <span className="text-xs text-foreground/70">Стоимость сравнения: </span>
                          <span className="text-lg font-bold text-primary">{problem.cost}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {problem.items && (
                    <ul className="space-y-3">
                      {problem.items.map((item, i) => {
                        const ItemIcon = problem.itemIcon;
                        return (
                          <li key={i} className="flex items-start gap-2 text-base leading-relaxed">
                            <ItemIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  
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

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {/* First Row: 2 Columns */}
        <div className="flex justify-center gap-6 mb-6">
          {problems.slice(0, 2).map((problem, index) => (
            <Card key={index} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] w-fit max-w-md">
              <div className="mb-6">
                <Badge className={`${problem.badgeColor} mb-4`}>
                  {problem.badge}
                </Badge>
                {problem.title && (
                  <h3 className="text-2xl font-grotesk font-bold mb-2">{problem.title}</h3>
                )}
                {problem.amount && (
                  <div className="text-3xl font-bold text-primary mb-4">{problem.amount}</div>
                )}
              </div>
              {problem.items && (
                <ul className="space-y-3">
                  {problem.items.map((item, i) => {
                    const ItemIcon = problem.itemIcon;
                    return (
                      <li key={i} className="flex items-start gap-2 text-base leading-relaxed">
                        <ItemIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Card>
          ))}
        </div>

        {/* Second Row: Full Width Card */}
        <div className="flex justify-center">
          {(() => {
            const problem = problems[2];
            return (
              <Card className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] w-fit max-w-[920px]">
                <div className="space-y-6">
                  <div>
                    {problem.title && (
                      <h3 className="text-xl font-grotesk font-semibold text-foreground/90 mb-4">
                        {problem.title}
                      </h3>
                    )}
                    {problem.savings && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {problem.savings.map((saving, i) => {
                          const SavingIcon = saving.icon;
                          return (
                            <li key={i} className="flex items-start gap-3 text-base">
                              <SavingIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{saving.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-8 pt-6 border-t border-border/30">
                    <div className="flex-shrink-0">
                      <Badge className={`${problem.badgeColor} mb-4`}>
                        {problem.badge}
                      </Badge>
                      {problem.verdict && (
                        <div className="flex items-center gap-3">
                          <Lightbulb className="w-8 h-8 text-primary" />
                          <div className="text-4xl font-bold text-primary">{problem.verdict}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0 text-right">
                      <div className="text-sm text-foreground/70 mb-2">Стоимость сравнения:</div>
                      <div className="text-3xl font-bold text-primary">{problem.cost}</div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })()}
        </div>
      </div>
    </>
  );
};
