import { SlideLayout } from "@/components/SlideLayout";
import { FileText, BarChart3, MessageSquare, HelpCircle, Headphones, Mail } from "lucide-react";

export const Slide17PartnerGets = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Что получает партнёр на старте</h2>

      <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
        Партнёр получает не просто идею, а готовую систему для заработка:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
        {[
          { icon: FileText, text: "Презентации по проектам" },
          { icon: BarChart3, text: "Таблицы доходности" },
          { icon: MessageSquare, text: "Короткие тексты для пересылки" },
          { icon: Mail, text: "Сообщения для WhatsApp / Telegram" },
          { icon: HelpCircle, text: "Ответы на частые вопросы" },
          { icon: Headphones, text: "Помощь в коммуникации и сопровождение" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-card/40 border border-border/30 rounded-lg">
            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-foreground/70">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-foreground/50">
        Партнёру не нужно запоминать все детали. Достаточно понимать общую логику, знать кому что может подойти, и передать нам контакт.
      </p>
    </div>
  </SlideLayout>
);
