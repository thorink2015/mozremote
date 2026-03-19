import { SlideLayout } from "@/components/SlideLayout";
import { RefreshCw } from "lucide-react";

export const Slide05RecurringIncome = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Один клиент — доход не один раз</h2>

      <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
        Если инвестор, которого вы привели:
      </p>

      <div className="space-y-3 max-w-2xl">
        {[
          "Заходит повторно",
          "Покупает второй объект",
          "Инвестирует в другое направление",
          "Возвращается позже с новым запросом",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-card/40 border border-border/30 rounded-lg">
            <RefreshCw className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm md:text-base text-foreground/80">{text}</span>
          </div>
        ))}
      </div>

      <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg max-w-2xl">
        <p className="text-base text-foreground/80 font-medium">
          Партнёр также получает комиссию повторно. Один качественный контакт может приносить доход несколько раз.
        </p>
      </div>
    </div>
  </SlideLayout>
);
