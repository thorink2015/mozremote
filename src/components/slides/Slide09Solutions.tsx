import { SlideLayout } from "@/components/SlideLayout";
import { Target } from "lucide-react";

export const Slide09Solutions = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Подбираем решения под задачу инвестора</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Наша задача — не просто отправить презентацию, а понять:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {[
          "Размер капитала",
          "Желаемый срок",
          "Нужна ли гарантия",
          "Важен ли короткий цикл",
          "Нужен ли валютный доход",
          "Хочет ли инвестор физический актив",
          "Насколько он консервативен",
          "Готов ли к более доходной модели",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-card/40 border border-border/30 rounded-lg">
            <Target className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground/70">{text}</span>
          </div>
        ))}
      </div>

      <p className="text-base text-foreground/60">
        И только после этого предложить релевантные варианты.
      </p>
    </div>
  </SlideLayout>
);
