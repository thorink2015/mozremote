import { SlideLayout } from "@/components/SlideLayout";
import { CheckCircle, XCircle } from "lucide-react";

export const Slide04Benefits = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Партнёру не нужно вести продажу</h2>

      <p className="text-base text-foreground/70 leading-relaxed">
        Чтобы зарабатывать вместе с нами, партнёру не нужно:
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Не нужно</h3>
          {[
            "Глубоко разбираться во всех проектах",
            "Самостоятельно анализировать документы",
            "Объяснять инвестору финансовую модель",
            "Закрывать возражения",
            "Заниматься дожимом",
            "Вести клиента до оплаты",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-foreground/60">
              <XCircle className="w-4 h-4 text-foreground/20 mt-0.5 flex-shrink-0" />
              {text}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Для партнёра это</h3>
          {[
            "Минимальная операционная нагрузка",
            "Отсутствие необходимости строить собственную систему",
            "Возможность зарабатывать на контактах без сложной инфраструктуры",
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);
