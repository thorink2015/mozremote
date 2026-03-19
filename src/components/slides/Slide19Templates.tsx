import { SlideLayout } from "@/components/SlideLayout";
import { Copy, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Slide19Templates = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Готовые сообщения для клиентов</h2>

      <div className="space-y-6 max-w-3xl">
        <Card className="bg-card/40 border border-border/30 p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-2 text-sm text-primary font-semibold">
            <MessageSquare className="w-4 h-4" />
            Вариант 1
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Привет! Сейчас у меня есть контакт команды, которая помогает инвесторам размещать капитал в разные проекты: гостиничная недвижимость за рубежом, земля в США, земля в Подмосковье и другие варианты под запрос.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Они не продают один объект всем подряд, а подбирают решение под капитал, срок, риск и цель инвестора.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Если тебе интересно, могу познакомить напрямую. Они сами всё объяснят, покажут расчёты и подберут подходящий вариант.
          </p>
        </Card>

        <Card className="bg-card/40 border border-border/30 p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-2 text-sm text-primary font-semibold">
            <MessageSquare className="w-4 h-4" />
            Вариант 2
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Привет! Если тебе сейчас актуально, куда разместить капитал от 100k+, могу дать контакт команды, которая подбирает инвестиционные проекты под задачу инвестора.
          </p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Сейчас у них есть варианты по Грузии, земле в США и ещё несколько направлений. Если хочешь, могу познакомить.
          </p>
        </Card>
      </div>
    </div>
  </SlideLayout>
);
