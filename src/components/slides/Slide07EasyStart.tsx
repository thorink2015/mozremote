import { SlideLayout } from "@/components/SlideLayout";
import { XCircle, ArrowRight } from "lucide-react";

export const Slide07EasyStart = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Партнёру не нужно ничего строить с нуля</h2>

      <div className="space-y-3 max-w-2xl">
        <p className="text-sm text-foreground/40 uppercase tracking-wider font-semibold">Не нужно:</p>
        {[
          "Искать проекты самостоятельно",
          "Собирать документы",
          "Проверять юридическую часть",
          "Строить отдел продаж",
          "Создавать систему сопровождения",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-foreground/60">
            <XCircle className="w-4 h-4 text-foreground/20 flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>

      <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg max-w-2xl space-y-3">
        <p className="text-sm text-primary font-semibold uppercase tracking-wider">Для старта достаточно:</p>
        {[
          "Иметь контакт с потенциальным инвестором",
          "Сделать интро",
          "Передать нам человека",
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-3 text-base text-foreground/80">
            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>

      <p className="text-sm text-foreground/50">
        Всё остальное — подбор, анализ, сопровождение, переговоры и закрытие — делает команда MOZ REMOTE SOLUTIONS.
      </p>
    </div>
  </SlideLayout>
);
