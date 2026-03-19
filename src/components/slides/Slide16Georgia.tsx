import { SlideLayout } from "@/components/SlideLayout";
import { DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Slide16Georgia = () => (
  <SlideLayout>
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-semibold uppercase tracking-wider">
          Направление 3
        </div>
      </div>

      <h2 className="font-grotesk text-3xl md:text-5xl">Гостиничная недвижимость в Грузии</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Валютный доход, бренд, понятный физический актив. Гостиничная недвижимость с профессиональным управлением, брендированной моделью и гарантированным доходом.
      </p>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
        <Card className="bg-card/40 border border-border/30 p-5 rounded-lg space-y-3">
          <h3 className="font-grotesk text-lg">Проект 1</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-foreground/50">Площадь</span><span>31,2 м²</span></div>
            <div className="flex justify-between"><span className="text-foreground/50">Стоимость</span><span>€274,928</span></div>
            <div className="flex justify-between"><span className="text-foreground/50">Перепродажа</span><span className="text-primary font-bold">+€49,552 (18%)</span></div>
            <div className="flex justify-between"><span className="text-foreground/50">Гарантия</span><span className="text-primary font-bold">€27,493 (10%)</span></div>
          </div>
        </Card>

        <Card className="bg-card/40 border border-border/30 p-5 rounded-lg space-y-3">
          <h3 className="font-grotesk text-lg">Проект 2</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-foreground/50">Площадь</span><span>37,3 м²</span></div>
            <div className="flex justify-between"><span className="text-foreground/50">Стоимость</span><span>€244,242</span></div>
            <div className="flex justify-between"><span className="text-foreground/50">Перепродажа</span><span className="text-primary font-bold">+€95,785 (39,2%)</span></div>
            <div className="flex justify-between"><span className="text-foreground/50">Гарантия</span><span className="text-primary font-bold">€24,424 (10%)</span></div>
          </div>
        </Card>
      </div>

      <div className="flex items-center gap-2">
        <DollarSign className="w-5 h-5 text-primary" />
        <span className="text-base text-foreground/70">Бюджет: <span className="font-bold text-foreground">от €67,000 до €600,000+</span></span>
      </div>
    </div>
  </SlideLayout>
);
