import { SlideLayout } from "@/components/SlideLayout";
import { ArrowRight, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Slide21CTA = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Стать партнёром</h2>

      <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl">
        Партнёрская программа MOZ REMOTE SOLUTIONS подходит тем, кто:
      </p>

      <div className="space-y-3 max-w-2xl">
        {[
          "Знает людей с капиталом",
          "Хочет зарабатывать на рекомендациях",
          "Не хочет вести операционную часть самостоятельно",
          "Хочет работать с серьёзной инвестиционной темой",
          "Хочет получать хороший доход за качественные интро",
        ].map((text, i) => (
          <div key={i} className="flex items-start gap-3 text-sm md:text-base text-foreground/70">
            <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>

      <div className="p-6 bg-primary/10 border border-primary/20 rounded-lg max-w-2xl space-y-2">
        <p className="text-base text-foreground/80 font-medium">Вы приводите контакт.</p>
        <p className="text-base text-foreground/80 font-medium">MOZ REMOTE SOLUTIONS берёт на себя всю работу.</p>
        <p className="text-base text-primary font-bold">Вы зарабатываете на результате.</p>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-foreground/50">
          Напишите нам — мы отправим актуальные проекты, партнёрские условия, примеры заработка и материалы для старта.
        </p>

        <a href="https://t.me/manoliiulia" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)]">
            <Send className="w-5 h-5 mr-2" />
            Написать нам
          </Button>
        </a>
      </div>
    </div>
  </SlideLayout>
);
