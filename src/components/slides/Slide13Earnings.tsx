import { SlideLayout } from "@/components/SlideLayout";
import { DollarSign, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Slide13Earnings = () => (
  <SlideLayout>
    <div className="space-y-8">
      <h2 className="font-grotesk text-3xl md:text-5xl">Сколько может зарабатывать партнёр</h2>

      <div className="grid md:grid-cols-1 gap-4 max-w-3xl">
        <Card className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
          <p className="text-2xl font-bold text-primary">от 20 до 50%</p>
          <p className="text-sm text-foreground/50">от нашей комиссии</p>
        </Card>
      </div>

      <div className="space-y-4 max-w-3xl">
        <h3 className="font-grotesk text-xl">Примеры заработка</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-card/40 border border-border/30 p-5 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <DollarSign className="w-4 h-4 text-primary" />
              Сделка по Грузии
            </div>
            <p className="text-sm text-foreground/70">Клиент инвестирует €300,000</p>
            <p className="text-lg font-bold text-primary">€6,000 – €12,000</p>
            <p className="text-xs text-foreground/40">с одной сделки</p>
          </Card>

          <Card className="bg-card/40 border border-border/30 p-5 rounded-lg space-y-3">
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <TrendingUp className="w-4 h-4 text-primary" />
              Земля в США
            </div>
            <p className="text-sm text-foreground/70">Инвестиция $100,000</p>
            <p className="text-lg font-bold text-primary">2,5% от суммы</p>
            
          </Card>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-foreground/50 max-w-3xl">
        <Clock className="w-4 h-4 text-primary" />
        Комиссия выплачивается после оплаты инвестором — честная и прозрачная модель.
      </div>
    </div>
  </SlideLayout>
);
