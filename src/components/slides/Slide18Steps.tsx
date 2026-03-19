import { SlideLayout } from "@/components/SlideLayout";

const steps = [
  { step: "01", title: "Заявка", desc: "Партнёр связывается с MOZ REMOTE SOLUTIONS и заявляет интерес к сотрудничеству" },
  { step: "02", title: "Обсуждение", desc: "Обсуждаем тип вашей аудитории, тип клиентов и подходящие инвестиционные направления" },
  { step: "03", title: "Материалы", desc: "Передаём стартовые материалы: презентации, офферы, таблицы доходности, готовые тексты" },
  { step: "04", title: "Контакт", desc: "Партнёр передаёт нам контакт или делает интро" },
  { step: "05", title: "Сопровождение", desc: "Команда MOZ берёт на себя всю коммуникацию и сопровождение" },
  { step: "06", title: "Вознаграждение", desc: "После оплаты сделки партнёр получает своё вознаграждение" },
];

export const Slide18Steps = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Как выглядит работа пошагово</h2>

      <div className="space-y-4 max-w-3xl">
        {steps.map((s) => (
          <div key={s.step} className="flex items-start gap-5 p-4 bg-card/40 border border-border/30 rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-bold text-primary">{s.step}</span>
            </div>
            <div>
              <h3 className="font-grotesk text-base font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-foreground/60">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
