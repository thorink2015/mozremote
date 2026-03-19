import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { DashboardReport } from "@/components/DashboardReport";
import { ProblemCarousel } from "@/components/ProblemCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileText, Building, TrendingUp, Shield, DollarSign, Search, AlertTriangle, Calendar, Award, Clock, Link, Quote } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Two Column Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Аудит Сделки За 48 Часов</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Deal Shield<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Проверим объект, застройщика и документы. Получишь go/no-go решение с полным отчётом
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">12 критериев</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">48 часов</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">95K+ сэкономлено</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_0px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Запустить Аудит →
              </Button>
            </a>
          </div>

          {/* Right Column - Dashboard Cards */}
          <div className="space-y-4">
            {/* Card: Audit Results */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Статус Аудита</div>
                  <div className="text-xs text-foreground/60">Типичная сделка без проверки</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-red-400 text-sm font-medium">Критические риски обнаружены</span>
                <span className="text-red-400 font-bold">8/10</span>
              </div>
              
              <div className="bg-muted/50 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Юридическая чистота</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">OK</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Финансы застройщика</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">OK</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">Риск задержки</span>
                  </div>
                  <span className="text-sm text-yellow-400 font-medium">6 мес</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span className="text-sm">Тренд района</span>
                  </div>
                  <span className="text-sm text-red-400 font-medium">-8%</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <div className="text-center mb-2">
                  <span className="text-red-400 font-bold text-base">🚨 РЕКОМЕНДАЦИЯ: NO GO</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-foreground/70">Сэкономлено: </span>
                  <span className="text-sm font-semibold text-primary">€95,000</span>
                </div>
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
            История Одной Потерянной Сделки
          </h2>
        </div>
        
        <ProblemCarousel />
      </section>

      <SectionDivider />

      {/* What's Included Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Что Проверяем За 48 Часов
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            12 критериев комплексной проверки сделки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: CheckCircle, title: "Юридическая Чистота", desc: "Регистрация, лицензии, судебные дела" },
            { icon: DollarSign, title: "Финансы Застройщика", desc: "Балансы, долги, cash flow проекта" },
            { icon: Building, title: "История Проектов", desc: "Предыдущие объекты, задержки сдачи" },
            { icon: TrendingUp, title: "Анализ Локации", desc: "Динамика цен, тренды района, спрос" },
            { icon: FileText, title: "Проверка Документов", desc: "ДДУ, разрешения, право на землю" },
            { icon: AlertTriangle, title: "Red Flags", desc: "Подводные камни, скрытые расходы" },
            { icon: DollarSign, title: "Скрытые Комиссии", desc: "Неучтённые налоги, подключения" },
            { icon: Search, title: "Альтернативы", desc: "Сравнение с 3 похожими объектами" },
            { icon: TrendingUp, title: "Рыночный Анализ", desc: "Спрос, предложение, ликвидность" },
            { icon: Shield, title: "Юридические Риски", desc: "Проблемные пункты, штрафы" },
            { icon: Calendar, title: "График Стройки", desc: "Реальные сроки, риск задержки" },
            { icon: Award, title: "Финальный Вердикт", desc: "GO/NO-GO + альтернативы" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-grotesk text-base md:text-lg mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Как Работает Аудит
          </h2>
          <p className="text-lg text-foreground/60">
            Простой процесс за 3 шага
          </p>
        </div>
        
        {/* Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { icon: Link, title: "Отправляешь Ссылку", desc: "Даёшь ссылку на объект + договор (если есть). Старт проверки.", step: "01" },
            { icon: Search, title: "Мы Проверяем 48 Часов", desc: "12 критериев, все документы, застройщик, локация, красные флаги", step: "02" },
            { icon: FileText, title: "Получаешь Отчёт + Вердикт", desc: "PDF отчёт, GO/NO-GO решение, список рисков, альтернативы", step: "03" }
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] relative">
                {/* Step Number - positioned on far right as watermark */}
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                  <span className="text-5xl md:text-6xl font-bold text-foreground/5 leading-none">{step.step}</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="font-grotesk text-xl md:text-2xl mb-3 flex items-center justify-start gap-2">
                      <span className="text-foreground/60">→</span>
                      <span>{step.title}</span>
                    </h3>
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

      {/* Sample Report Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Пример Отчёта
          </h2>
        </div>
        
        <DashboardReport />
      </section>

      <SectionDivider />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">€95K+</div>
            <div className="text-sm text-foreground/60">Сэкономлено</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-foreground/60">Проверок</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">48</div>
            <div className="text-sm text-foreground/60">Часов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-foreground/60">Критериев</div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Отзывы Клиентов
          </h2>
          <p className="text-lg text-foreground/60">
            Что говорят наши клиенты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "Deal Shield помог нам избежать проблемной сделки. Отчёт был детальным и очень полезным.",
              author: "Михаил К.",
              role: "Частный инвестор"
            },
            {
              quote: "48 часов — и мы получили полную картину. Это сэкономило нам месяцы проверок.",
              author: "Анна С.",
              role: "Директор по инвестициям"
            },
            {
              quote: "Профессиональный подход, чёткий отчёт и реальная помощь в принятии решения.",
              author: "Дмитрий В.",
              role: "Предприниматель"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />
                <p className="text-foreground/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">{testimonial.author}</div>
                <div className="text-sm text-foreground/60">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
