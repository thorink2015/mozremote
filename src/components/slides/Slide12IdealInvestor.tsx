import { SlideLayout } from "@/components/SlideLayout";
import { CheckCircle, XCircle } from "lucide-react";

export const Slide12IdealInvestor = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Кого мы ищем через партнёров</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Идеальный инвестор</h3>
          {[
            "Инвесторы с опытом",
            "Предприниматели, топ-менеджеры",
            "Собственники бизнеса",
            "Люди от 30 лет",
            "Капитал от $100,000",
            "Хочет приумножить капитал",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-foreground/70">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              {text}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Частые запросы</h3>
          {[
            "Хочу пристроить 100k+",
            "Хочу валютный доход",
            "Хочу короткий цикл",
            "Хочу недвижимость за рубежом",
            "Хочу пассивный доход",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-foreground/60">
              <span className="text-primary">—</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2 max-w-2xl pt-4 border-t border-border/30">
        <h3 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Кто не подходит</h3>
        {[
          "Люди без капитала",
          "Не готовые к инвестициям психологически",
          "Те, кто не рассматривает рост капитала как задачу",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-foreground/40">
            <XCircle className="w-4 h-4 text-foreground/20 mt-0.5 flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
