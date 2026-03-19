import { SlideLayout } from "@/components/SlideLayout";
import { Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Slide00Hero = () => (
  <SlideLayout>
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-xs uppercase tracking-wider font-semibold text-primary">Партнёрская программа</span>
      </div>

      <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight">
        MOZ Remote Solutions
      </h1>

      <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl">
        Партнёрская программа для брокеров, финансовых консультантов, агентов и амбассадоров
      </p>

      <p className="text-base md:text-lg text-foreground/50 leading-relaxed max-w-3xl">
        Зарабатывайте на инвестиционных сделках вместе с международной командой, не погружаясь самостоятельно в подбор проектов, юридические детали и закрытие клиентов
      </p>

      <a href="https://t.me/manoliiulia" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] mt-4">
          Стать партнёром <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </a>
    </div>
  </SlideLayout>
);
