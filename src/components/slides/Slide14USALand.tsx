import { SlideLayout } from "@/components/SlideLayout";
import { MapPin, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

export const Slide14USALand = () => (
  <SlideLayout>
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-semibold uppercase tracking-wider">
          Направление 1
        </div>
      </div>

      <h2 className="font-grotesk text-3xl md:text-5xl">Земельные сделки в США</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Пассивное участие в высокомаржинальном бизнесе по покупке и перепродаже земли. Покупаем незастроенные участки значительно ниже рыночной стоимости, затем перепродаём по рыночной цене.
      </p>

      <div className="flex flex-wrap gap-3">
        {["Не стройка", "Не флиппинг домов", "Не девелопмент"].map((t, i) => (
          <span key={i} className="px-3 py-1.5 bg-card/40 border border-border/30 rounded-full text-sm text-foreground/60">{t}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
        {[
          "Нет стройки и подрядчиков",
          "Нет арендаторов",
          "Нет ремонта",
          "Низкие расходы на удержание",
          "Понятная стратегия",
          "Несколько каналов выхода",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-2 p-3 bg-card/40 border border-border/30 rounded-lg text-sm text-foreground/70">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>

      <div className="flex gap-6 items-center max-w-3xl">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-foreground/50">Вход от</p>
            <p className="text-xl font-bold text-foreground">$100,000</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-foreground/50">Доходность</p>
            <p className="text-xl font-bold text-primary">от 36% годовых</p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
