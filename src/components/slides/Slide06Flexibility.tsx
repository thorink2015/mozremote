import { SlideLayout } from "@/components/SlideLayout";
import { CheckCircle } from "lucide-react";

export const Slide06Flexibility = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Мы не ограничены одним проектом</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Одно из ключевых преимуществ MOZ REMOTE SOLUTIONS — это подбор решения под конкретного инвестора, а не модель «один объект для всех».
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        <div className="p-5 bg-card/40 border border-border/30 rounded-lg">
          <p className="text-sm text-foreground/40 mb-2">Мы НЕ работаем так:</p>
          <p className="text-base text-foreground/60 italic">«нужно продать один проект любой ценой»</p>
        </div>
        <div className="p-5 bg-primary/5 border border-primary/20 rounded-lg">
          <p className="text-sm text-primary mb-2">Мы работаем так:</p>
          <p className="text-base text-foreground/80 italic">«нужно понять задачу инвестора и подобрать вариант, который ему подходит»</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {["Более гибкое", "Более честное", "Более конверсионное", "Более удобное для партнёра"].map((text, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 bg-card/40 border border-border/30 rounded-full text-sm text-foreground/70">
            <CheckCircle className="w-4 h-4 text-primary" />
            {text}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
