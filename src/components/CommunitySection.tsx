import { SectionDivider } from "@/components/SectionDivider";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Zap, Users, BarChart3, AlertTriangle, Handshake, LifeBuoy, TrendingUp, Calculator } from "lucide-react";

export const CommunitySection = () => {
  const services = [
    { icon: Shield, name: "Deal Shield", link: "/deal-shield" },
    { icon: Zap, name: "Term-Sheet Sprint", link: "/term-sheet-sprint" },
    { icon: Users, name: "Manager Triangul.", link: "/manager-triangulation" },
    { icon: BarChart3, name: "Underwriting Wall", link: "/underwriting-wall" },
    { icon: AlertTriangle, name: "Negative Screening", link: "/negative-screening" },
    { icon: Handshake, name: "Negot. Syndicate", link: "/negotiation-syndicate" },
    { icon: LifeBuoy, name: "Investor SOS", link: "/investor-sos" },
    { icon: TrendingUp, name: "Exit Simulator", link: "/exit-simulator" },
    { icon: Calculator, name: "ROI Calculator", link: "/roi-calculator" },
  ];

  return (
    <>
      <SectionDivider />

      {/* Community Package Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-3">
            Этот Сервис Входит В Комьюнити
          </h2>
          <p className="text-lg text-foreground/60">
            9 профессиональных инструментов для полного цикла инвестиций в недвижимость
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <ServicesCarousel services={services} />
        </div>
        
        <Card className="max-w-4xl mx-auto p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Pricing */}
            <div>
              <h3 className="font-grotesk text-lg mb-4">ЕСЛИ ПОКУПАТЬ ОТДЕЛЬНО:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Deal Shield:</span>
                  <span className="font-semibold">$199</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Term-Sheet Sprint:</span>
                  <span className="font-semibold">$299</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Manager Triangul.:</span>
                  <span className="font-semibold">$149</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Underwriting Wall:</span>
                  <span className="font-semibold">$99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">Остальные 4:</span>
                  <span className="font-semibold">$400+</span>
                </div>
                <div className="border-t border-border/30 pt-3 mt-3 flex justify-between font-bold">
                  <span>ИТОГО:</span>
                  <span className="text-lg">$1,146+</span>
                </div>
              </div>
            </div>

            {/* Community Pricing */}
            <div className="bg-primary/10 border border-primary/30 rounded-[7px] p-6">
              <div className="text-center">
                <div className="text-xs text-primary/70 mb-2">✨ В КОМЬЮНИТИ</div>
                <p className="text-xl font-bold mb-3">7 ДНЕЙ БЕСПЛАТНО</p>
                <div className="mb-4">
                  <div className="text-sm text-foreground/50 line-through mb-1">$1,146</div>
                  <div className="text-3xl font-bold text-primary">$59/мес</div>
                </div>
                <p className="text-sm text-foreground/70 mb-6">Все 9 сервисов без ограничений</p>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-[7px] active:scale-95 transition-transform">
                  Присоединиться →
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};
