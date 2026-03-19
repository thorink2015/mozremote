import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { XCircle, CheckCircle, Zap, DollarSign, Clock, Target, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const problems = [
  {
    icon: CheckCircle,
    badge: "КАК ОБЫЧНО",
    badgeColor: "bg-blue-900/30 border-blue-500/40 text-blue-400",
    title: "Объект в Dubai Creek",
    amount: "€180,000",
    items: [
      "Увидел объект, понравился",
      "Застройщик назвал цену",
      "Попросил скидку 5%, отказали",
      "Купил по полной цене",
      "Упустил возможность торга"
    ],
    itemIcon: CheckCircle
  },
  {
    icon: XCircle,
    badge: "ЧТО УПУСТИЛ",
    badgeColor: "bg-red-900/30 border-red-500/40 text-red-400",
    items: [
      "Скидка 8-10%: €15K-18K",
      "Паркинг в подарок: €15,000",
      "Без комиссии агента: €3,600",
      "Мебельный пакет: €5,000",
      "Лучшие условия оплаты"
    ],
    itemIcon: XCircle,
    total: "ИТОГО: €38,600+"
  },
  {
    icon: Zap,
    badge: "Term-Sheet Sprint Решение",
    badgeColor: "bg-primary/20 border-primary/40 text-primary",
    verdict: "✅ ЭКОНОМИЯ",
    savings: [
      { text: "Профессиональный LOI за 24ч", icon: Zap },
      { text: "5 рычагов для торга", icon: Target },
      { text: "Скрипт переговоров готов", icon: TrendingUp },
      { text: "Экономия €23,600", icon: DollarSign }
    ],
    cost: "$59/мес"
  }
];

export const TermSheetProblemCarousel = () => {
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
                            <Zap className="w-6 h-6 text-primary" />
                            <div className="text-3xl font-bold text-primary">{problem.verdict}</div>
                          </div>
                          {problem.title && (
                            <h3 className="text-lg font-grotesk font-semibold text-foreground/90">
                              {problem.title}
                            </h3>
                          )}
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
                            <span className="text-xs text-foreground/70">Стоимость: </span>
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
                    {problem.total && (
                      <div className="mt-4 pt-4 border-t border-border/30">
                        <div className="text-lg font-bold text-red-400">{problem.total}</div>
                      </div>
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

      {/* Desktop: Grid Layout (2 columns + 1 column) */}
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
              {problem.total && (
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="text-lg font-bold text-red-400">{problem.total}</div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Second Row: Full Width Verdict Card */}
        <div className="flex justify-center">
          {(() => {
            const problem = problems[2];
            return (
              <Card className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] w-fit max-w-[920px]">
                <div className="space-y-6">
                  {/* Top: Savings List */}
                  <div>
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

                  {/* Bottom Row: Verdict and Cost */}
                  <div className="flex items-start justify-between gap-8 pt-6 border-t border-border/30">
                    {/* Left: Badge and Verdict */}
                    <div className="flex-shrink-0">
                      <Badge className={`${problem.badgeColor} mb-4`}>
                        {problem.badge}
                      </Badge>
                      {problem.verdict && (
                        <div className="flex items-center gap-3">
                          <Zap className="w-8 h-8 text-primary" />
                          <div className="text-4xl font-bold text-primary">{problem.verdict}</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Right: Cost */}
                    <div className="flex-shrink-0 text-right">
                      <div className="text-sm text-foreground/70 mb-2">Стоимость:</div>
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
