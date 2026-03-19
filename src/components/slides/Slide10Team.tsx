import { SlideLayout } from "@/components/SlideLayout";
import { Globe, Languages, Plane, FileText, Landmark, Home } from "lucide-react";

export const Slide10Team = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Международная команда</h2>

      <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg max-w-md">
        <Languages className="w-5 h-5 text-primary" />
        <span className="text-base text-foreground/80 font-medium">Команда говорит на 6 языках</span>
      </div>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Это позволяет нам сопровождать:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {[
          { icon: Globe, text: "Международные сделки" },
          { icon: Plane, text: "Инвесторов из разных юрисдикций" },
          { icon: Landmark, text: "Вопросы перевода средств" },
          { icon: FileText, text: "Подбор проектов" },
          { icon: Home, text: "Юридические и организационные задачи" },
          { icon: Globe, text: "Вопросы ВНЖ, гражданства и международной структуры" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-card/40 border border-border/30 rounded-lg">
            <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground/70">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
