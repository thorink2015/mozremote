import { SlideLayout } from "@/components/SlideLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Нужно ли мне самому разбираться во всех проектах?", a: "Нет. Достаточно понимать общую картину и знать, кому это может быть интересно." },
  { q: "Нужно ли мне самому продавать?", a: "Нет. Вы можете просто передать контакт или сделать интро." },
  { q: "Могу ли я видеть, как идёт работа с клиентом?", a: "Да. При желании мы можем добавить вас в чат, чтобы процесс был прозрачным." },
  { q: "Могу ли я приводить клиентов не на один проект, а в целом?", a: "Да. Это даже лучше. Мы подберём вариант под задачу инвестора." },
  { q: "Получу ли я комиссию, если клиент инвестирует повторно?", a: "Да. Если ваш клиент заходит в следующую сделку, вы также получаете вознаграждение." },
];

export const Slide20FAQ = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Частые вопросы</h2>

      <Accordion type="single" collapsible className="max-w-3xl space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card/40 border border-border/30 rounded-lg px-5">
            <AccordionTrigger className="text-sm md:text-base text-left hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-foreground/60 pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SlideLayout>
);
