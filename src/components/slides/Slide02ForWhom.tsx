import { SlideLayout } from "@/components/SlideLayout";
import { Users, Briefcase, Building2, UserCheck, HandCoins, Crown, Star, Heart } from "lucide-react";

export const Slide02ForWhom = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Для кого создана эта программа</h2>

      <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
        Партнёрская программа подходит тем, у кого уже есть доступ к людям с капиталом и кто хочет монетизировать свои рекомендации, доверие аудитории и деловые связи.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { icon: HandCoins, text: "Финансовым консультантам" },
          { icon: Briefcase, text: "Брокерам" },
          { icon: Building2, text: "Агентам по недвижимости" },
          { icon: UserCheck, text: "Investment advisors" },
          { icon: Crown, text: "Wealth consultants" },
          { icon: Star, text: "Предпринимателям" },
          { icon: Users, text: "Топ-менеджерам" },
          { icon: Heart, text: "Амбассадорам" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-card/40 border border-border/30 rounded-lg">
            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground/80">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-foreground/50">
        А также друзьям и знакомым, у которых есть контакты людей с деньгами
      </p>
    </div>
  </SlideLayout>
);
