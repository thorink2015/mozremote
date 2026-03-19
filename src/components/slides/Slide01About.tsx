import { SlideLayout } from "@/components/SlideLayout";
import { Building2, MapPin, Landmark, TrendingUp } from "lucide-react";

export const Slide01About = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">О компании</h2>

      <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
        MOZ REMOTE SOLUTIONS развивает международную партнёрскую сеть для привлечения инвесторов в проверенные инвестиционные проекты в сфере:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: Building2, text: "Зарубежной недвижимости" },
          { icon: MapPin, text: "Земельных сделок" },
          { icon: TrendingUp, text: "Short-cycle инвестиционных моделей" },
          { icon: Landmark, text: "Других направлений под задачу клиента" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-card/40 border border-border/30 rounded-lg">
            <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm md:text-base text-foreground/80">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="text-base text-foreground/50 leading-relaxed max-w-3xl">
        Направление сопровождается международной командой под кураторством Юлии Маноли. Наша задача — не просто показывать инвесторам отдельные объекты, а подбирать для них понятные, проверенные и подходящие по стратегии решения.
      </p>
    </div>
  </SlideLayout>
);
