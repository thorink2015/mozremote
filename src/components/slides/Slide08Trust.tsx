import { SlideLayout } from "@/components/SlideLayout";
import { ShieldCheck, FileSearch, Scale, AlertTriangle, BarChart3, Gem } from "lucide-react";

export const Slide08Trust = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Мы работаем только с проверенными проектами</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Каждый проект проходит внутреннюю проверку юристами, финансовым советником и международной командой сопровождения.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
        {[
          { icon: Scale, text: "Структура сделки" },
          { icon: BarChart3, text: "Логика дохода" },
          { icon: FileSearch, text: "Понятность модели" },
          { icon: ShieldCheck, text: "Документы" },
          { icon: AlertTriangle, text: "Риски" },
          { icon: Gem, text: "Реальная ценность" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-card/40 border border-border/30 rounded-lg">
            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground/70">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-foreground/50 italic">
        Мы не работаем по модели: «продаём всё, что красиво выглядит»
      </p>
    </div>
  </SlideLayout>
);
