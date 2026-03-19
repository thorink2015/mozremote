import { SlideLayout } from "@/components/SlideLayout";
import { TrendingUp, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Slide11Cases = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Реальные кейсы</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Команда уже участвовала в реальных инвестиционных сделках и опирается не только на презентации, но и на практический опыт.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <Card className="bg-card/40 border border-border/30 p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-grotesk text-lg">Земля в США</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Покупка</span>
              <span className="text-foreground/80 font-medium">$37,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Продажа</span>
              <span className="text-primary font-bold">$91,500</span>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-border/30">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">+147% доход</span>
          </div>
        </Card>

        <Card className="bg-card/40 border border-border/30 p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-grotesk text-lg">Грузия</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-foreground/50">Инвестиция</span>
              <span className="text-foreground/80 font-medium">$270,000</span>
            </div>
            <div className="text-sm text-foreground/60">
              До ввода объекта в эксплуатацию уже получен первый гарантированный доход
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-border/30">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Гарантированный доход</span>
          </div>
        </Card>
      </div>

      <p className="text-sm text-foreground/50">
        Мы говорим не только языком «концепции», но и языком реальных кейсов и сделок.
      </p>
    </div>
  </SlideLayout>
);
