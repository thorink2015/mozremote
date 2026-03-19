import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <>
      <SectionDivider />

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24 mb-0">
        <Card className="max-w-4xl mx-auto p-8 md:p-16 bg-card/40 backdrop-blur-md border-2 border-white/10 rounded-[7px]">
          <div className="text-center">
            {/* Main Heading */}
            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Один Инструмент Может Сэкономить €50K+ Капитала
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              9 профессиональных сервисов. Неограниченный доступ. $59/месяц первым 100 участникам.
            </p>

            {/* Guarantee Badge */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/20 border-2 border-primary/60 text-primary px-6 py-3 rounded-full text-base font-semibold">
                <Shield className="w-5 h-5" />
                Гарантия Качества
              </div>
            </div>

            {/* What's Included Section */}
            <h3 className="font-grotesk text-2xl md:text-3xl font-bold mb-8">Что Включено:</h3>

            {/* Two-column checklist */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-foreground">Все инструменты без ограничений</span>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-foreground">Профессиональные сервисы</span>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-foreground">База знаний 100+ кейсов</span>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-foreground">Экспертная поддержка 24/7</span>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-foreground">Комьюнити опытных инвесторов</span>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-foreground">Еженедельные обновления</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="text-lg text-foreground/50 line-through mb-1">$199/мес</div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">$59</div>
            </div>

            {/* CTA Button */}
            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base rounded-[7px] shadow-[0_0_40px_rgba(179,158,138,0.3)] active:scale-95 transition-transform mb-4">
                Начать 7 Дней Бесплатно →
              </Button>
            </a>

            <p className="text-base text-foreground/70 font-medium">
              Founding members: $59/мес навсегда
            </p>
          </div>
        </Card>
      </section>
    </>
  );
};
