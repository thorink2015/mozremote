import { SlideLayout } from "@/components/SlideLayout";
import { UserPlus, Search, FileText, MessageCircle, Handshake, CreditCard, ShieldCheck } from "lucide-react";

export const Slide03Partnership = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">В чём суть партнёрства</h2>

      <p className="text-base text-foreground/50 leading-relaxed">
        Это не классическая модель, где партнёру дают объект и говорят: «Теперь сами разбирайтесь, сами продавайте и сами закрывайте клиента.» У нас другая система.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Partner's task */}
        <div className="p-6 bg-card/40 border border-border/30 rounded-lg space-y-4">
          <h3 className="font-grotesk text-lg text-primary flex items-center gap-2">
            <UserPlus className="w-5 h-5" /> Задача партнёра
          </h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">—</span> Познакомить нас с потенциальным инвестором</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">—</span> Передать контакт заинтересованного человека</li>
          </ul>
        </div>

        {/* MOZ's task */}
        <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg space-y-4">
          <h3 className="font-grotesk text-lg text-primary flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Задача MOZ
          </h3>
          <ul className="space-y-2 text-sm text-foreground/70">
            {[
              "Подобрать проект под запрос инвестора",
              "Отправить материалы",
              "Объяснить доходность, структуру и риски",
              "Ответить на все вопросы",
              "Провести переговоры",
              "Довести клиента до оплаты",
              "Сопровождать процесс сделки полностью",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">—</span> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-base text-foreground/60 font-medium">
        Партнёр приводит контакт — а всю дальнейшую работу берёт на себя наша команда.
      </p>
    </div>
  </SlideLayout>
);
