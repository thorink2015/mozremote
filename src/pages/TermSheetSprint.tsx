import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { TermSheetProblemCarousel } from "@/components/TermSheetProblemCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, TrendingUp, BarChart, MessageSquare, Target, Repeat, Gift, Clock, 
  Scale, DollarSign, ClipboardCheck, ArrowLeftRight, CheckCircle, Send, 
  Cog, Home, Users, ArrowRight, Quote, FileText, Shield, Search, Building2
} from "lucide-react";

const TermSheetSprint = () => {
  return (
    <Layout>
      {/* Hero Section - Two Column Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">LOI За 24 Часа</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Term-Sheet Sprint<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Готовим письмо застройщику + рычаги торга<br />
              Экономь €15K-30K на каждой сделке
            </p>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Заказать Term-Sheet →
              </Button>
            </a>
          </div>

          {/* Right Column - LOI Package Status Dashboard */}
          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">⚡ LOI PACKAGE STATUS</div>
                  <div className="text-xs text-foreground/60">Следующий Sprint доступен</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-green-400 text-sm font-medium">Слот доступен через 6 часов</span>
                <span className="text-green-400 font-bold">⚡ READY</span>
              </div>
              
              <div className="bg-muted/50 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-primary h-2 rounded-full" style={{width: '94%'}}></div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between py-2 border-b border-border/20">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm">Средняя экономия</span>
                  </div>
                  <span className="text-sm text-primary font-bold">€23,600</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-border/20">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm">Скорость</span>
                  </div>
                  <span className="text-sm text-primary font-bold">18-24 часа</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-border/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm">Рычагов торга</span>
                  </div>
                  <span className="text-sm text-primary font-bold">5 аргументов</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Готовность</span>
                  </div>
                  <span className="text-sm text-green-400 font-bold">94% (высокая)</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-[7px]">
                    ЗАКАЗАТЬ LOI
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Problem Section - Carousel */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Переплатил €30K Из-За Слабых Переговоров
          </h2>
        </div>
        
        <TermSheetProblemCarousel />
      </section>

      <SectionDivider />

      {/* Process Section - 3 Numbered Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Как Работает Sprint
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { icon: Send, title: "ОТПРАВЛЯЕШЬ ДАННЫЕ", desc: "Отправляешь нам ссылку на объект и цену застройщика, указываешь свой бюджет и желаемые условия сделки, после чего стартует 24-часовой спринт по подготовке LOI.", step: "01" },
            { icon: Cog, title: "МЫ ГОТОВИМ ПАКЕТ", desc: "Анализируем текущую ситуацию на рынке и изучаем застройщика, составляем профессиональное письмо о намерениях с конкретными рычагами торга, готовим детальный скрипт переговоров и план дальнейших действий.", step: "02" },
            { icon: CheckCircle, title: "ПОЛУЧАЕШЬ РЕШЕНИЕ", desc: "Получаешь готовый PDF-пакет с письмом о намерениях и всеми необходимыми документами, подробный скрипт для ведения переговоров, отправляешь застройщику и начинаешь торговаться за лучшие условия.", step: "03" }
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] relative">
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                  <span className="text-5xl md:text-6xl font-bold text-primary/10 leading-none">{step.step}</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className="font-grotesk text-xl md:text-2xl mb-3 font-bold">{step.title}</h3>
                    <p className="text-base text-foreground/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* What's Included Section - 12 Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Что Получаешь За 24 Часа
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "Letter Of Intent (LOI)", desc: "Профессионально составленное письмо с твоим предложением" },
            { icon: TrendingUp, title: "5 Рычагов Торга", desc: "Аргументы для скидки: срочность, наличные, альтернативы" },
            { icon: BarChart, title: "Сравнительный Анализ", desc: "3 похожих объекта, обоснование твоей цены" },
            { icon: MessageSquare, title: "Скрипт Переговоров", desc: "Что говорить, как реагировать на отказ, как закрыть" },
            { icon: Target, title: "Анализ Застройщика", desc: "Его мотивация, финансовое положение, гибкость" },
            { icon: Repeat, title: "Backup Альтернативы", desc: "2 других объекта если откажут - позиция силы" },
            { icon: Gift, title: "Дополнительные Бонусы", desc: "Паркинг, мебель, комиссии - что можно выбить" },
            { icon: Clock, title: "Тайминг Сделки", desc: "План на 7 дней: отправка, переговоры, закрытие" },
            { icon: Scale, title: "Юридическая Защита", desc: "Какие пункты изменить в контракте в твою пользу" },
            { icon: DollarSign, title: "Финансовая Модель", desc: "Сколько экономишь, как улучшается ROI" },
            { icon: ClipboardCheck, title: "План Действий", desc: "Пошаговая инструкция: что делать после LOI" },
            { icon: ArrowLeftRight, title: "Контр-Предложения", desc: "3 варианта компромисса если не согласятся" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-grotesk text-base md:text-lg mb-2 leading-tight font-semibold">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Sample Results Section - Simplified */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Пример LOI Пакета
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Dubai Creek Harbour, 1BR — экономия €23,600 за 18 часов
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Result Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 rounded-[7px] hover:border-primary/30 transition-all">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-card/40 rounded-lg border border-border/30">
                <div className="text-sm text-foreground/60 mb-2">Цена застройщика</div>
                <div className="text-3xl font-bold text-foreground/50 line-through">€180,000</div>
              </div>
              
              <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
                <div className="text-sm text-primary mb-2">Наше предложение</div>
                <div className="text-3xl font-bold text-primary">€165,000</div>
                <div className="text-sm text-green-400 mt-1">-8.3%</div>
              </div>
              
              <div className="text-center p-6 bg-green-500/10 rounded-lg border border-green-500/30">
                <div className="text-sm text-green-400 mb-2">Итого экономия</div>
                <div className="text-3xl font-bold text-green-400">€23,600</div>
                <div className="text-xs text-foreground/60 mt-1">включая бонусы</div>
              </div>
            </div>
          </Card>
          
          {/* Two Column Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left - Leverage Points */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px] hover:border-primary/20 transition-all">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <span>5 Рычагов Торга</span>
              </h3>
              <div className="space-y-3">
                {[
                  "Оплата 50% сразу",
                  "2 альтернативных объекта",
                  "Срочность: 7 дней",
                  "Надёжный покупатель",
                  "Готовность подписать"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-border/20 hover:border-primary/30 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Right - Bonuses */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px] hover:border-primary/20 transition-all">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-primary" />
                <span>Дополнительно Выбили</span>
              </h3>
              <div className="space-y-3">
                {[
                  { text: "Паркинг в подарок", value: "€15,000" },
                  { text: "Без комиссии агента", value: "€3,600" },
                  { text: "Мебельный пакет", value: "€5,000" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground/80">{item.text}</span>
                    </div>
                    <span className="font-bold text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Case Study Timeline - Simplified */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Реальный Кейс: Dubai Creek
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            От заказа до закрытия — 7 дней
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Timeline Flow */}
          <div className="relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-green-500/50"></div>
            
            <div className="grid md:grid-cols-4 gap-6 relative">
              {[
                {
                  day: "День 0",
                  icon: Home,
                  title: "ОБЪЕКТ НАЙДЕН",
                  desc: "Dubai Creek, 1BR\n€180,000\nЗаказ Sprint",
                  color: "primary"
                },
                {
                  day: "День 1",
                  icon: Zap,
                  title: "LOI ГОТОВ",
                  desc: "Предложение €165K\n5 рычагов торга\nОтправлен застройщику",
                  color: "primary"
                },
                {
                  day: "Дни 2-5",
                  icon: MessageSquare,
                  title: "ПЕРЕГОВОРЫ",
                  desc: "Показал альтернативы\nПрименил рычаги\nСогласовали условия",
                  color: "primary"
                },
                {
                  day: "День 7",
                  icon: CheckCircle,
                  title: "ЗАКРЫТО",
                  desc: "€165K + бонусы\nЭкономия €23,600\nСделка подписана",
                  color: "green"
                }
              ].map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <Card 
                    key={i} 
                    className={`p-6 rounded-[7px] relative backdrop-blur-xl border transition-all hover:scale-105 ${
                      stage.color === 'green' 
                        ? 'bg-green-500/5 border-green-500/30 hover:border-green-500/50' 
                        : 'bg-card/40 border-white/10 hover:border-primary/30'
                    }`}
                    style={{
                      animation: `fade-in 0.5s ease-out ${i * 0.1}s backwards`
                    }}
                  >
                    {/* Badge */}
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full ${
                      stage.color === 'green' ? 'bg-green-500' : 'bg-primary'
                    }`}>
                      <span className="text-xs font-bold text-white whitespace-nowrap">{stage.day}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 mt-2 flex items-center justify-center border-2 ${
                      stage.color === 'green' 
                        ? 'bg-green-500/10 border-green-500/30' 
                        : 'bg-primary/10 border-primary/30'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        stage.color === 'green' ? 'text-green-400' : 'text-primary'
                      }`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`font-grotesk text-base font-bold mb-3 text-center ${
                      stage.color === 'green' ? 'text-green-400' : 'text-primary'
                    }`}>
                      {stage.title}
                    </h3>
                    
                    {/* Description */}
                    <div className="space-y-1.5 text-sm text-foreground/70 text-center">
                      {stage.desc.split('\n').map((line, j) => (
                        <p key={j} className="leading-tight">{line}</p>
                      ))}
                    </div>
                    
                    {/* Arrow - Desktop Only */}
                    {i < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-24 text-center">
        <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-6">
          Следующий LOI Может Сэкономить €20K+ На Сделке
        </h2>
        
        <p className="text-xl md:text-2xl font-body text-foreground/70 mb-10">
          24 часа до готового пакета. $59/месяц за все инструменты торга.
        </p>
        
        <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 rounded-[7px] shadow-[0_0_40px_rgba(179,158,138,0.3)] hover:shadow-[0_0_50px_rgba(179,158,138,0.4)] active:scale-95 transition-all">
            Заказать Term-Sheet →
          </Button>
        </a>
        
        <p className="text-sm text-foreground/50 mt-6">
          Первые 100 членов: $59/мес навсегда | 7 дней бесплатно | Один LOI = окупил год
        </p>
      </section>
    </Layout>
  );
};

export default TermSheetSprint;
