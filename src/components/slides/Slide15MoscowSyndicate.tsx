import { SlideLayout } from "@/components/SlideLayout";
import { MapPin, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Slide15MoscowSyndicate = () => (
  <SlideLayout>
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-semibold uppercase tracking-wider">
          Направление 2
        </div>
      </div>

      <h2 className="font-grotesk text-3xl md:text-5xl">Земельный синдикат в МО</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Участки покупаются на муниципальных торгах ниже рынка, после чего перепродаются частным покупателям. Небольшой вход, короткий цикл, прозрачная модель.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
        <div className="text-center p-3 bg-card/40 border border-border/30 rounded-lg">
          <p className="text-lg font-bold text-foreground">10 млн ₽</p>
          <p className="text-xs text-foreground/40">Общий объём</p>
        </div>
        <div className="text-center p-3 bg-card/40 border border-border/30 rounded-lg">
          <p className="text-lg font-bold text-primary">от 500K ₽</p>
          <p className="text-xs text-foreground/40">Мин. вход</p>
        </div>
        <div className="text-center p-3 bg-card/40 border border-border/30 rounded-lg">
          <p className="text-lg font-bold text-foreground">~10</p>
          <p className="text-xs text-foreground/40">Участков</p>
        </div>
        <div className="text-center p-3 bg-card/40 border border-border/30 rounded-lg">
          <p className="text-lg font-bold text-foreground">~4 мес</p>
          <p className="text-xs text-foreground/40">Горизонт</p>
        </div>
      </div>

      <Card className="bg-primary/5 border border-primary/20 p-5 rounded-lg max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">Пример: вход 1 000 000 ₽</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><span className="text-foreground/50">Доля:</span> <span className="text-foreground/80">10%</span></div>
          <div><span className="text-foreground/50">Прибыль:</span> <span className="text-primary font-bold">~178 000 ₽</span></div>
          <div><span className="text-foreground/50">Итог:</span> <span className="text-foreground/80">~1 178 000 ₽</span></div>
          <div><span className="text-foreground/50">Годовых:</span> <span className="text-primary font-bold">~35–40%</span></div>
        </div>
      </Card>

      <p className="text-sm text-foreground/50">
        Проект ведёт Елена Нуждина: 5+ лет в земельной сфере, 500+ участков продано в Подмосковье.
      </p>
    </div>
  </SlideLayout>
);
