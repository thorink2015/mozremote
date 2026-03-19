import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { InvestorSOSProblemCarousel } from "@/components/InvestorSOSProblemCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileText, Shield, AlertTriangle, Award, Clock, Quote, Phone, Zap, LifeBuoy, Target, Users, MessageSquare, TrendingUp, DollarSign, ArrowRight } from "lucide-react";

const InvestorSOS = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Экстренная Помощь 24/7</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Investor SOS<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Экстренная помощь когда что-то пошло не так. План действий за 48 часов. Юрист + эксперт + комьюнити.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">2-6 часов</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">24/7 доступ</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <LifeBuoy className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">Crisis support</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Получить Помощь →
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
                  <LifeBuoy className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-grotesk font-bold mb-1">SOS STATUS</div>
                  <div className="text-xs text-foreground/60">Экстренная ситуация</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-foreground/60 mb-1">Экстренный слот:</div>
                  <div className="text-lg font-bold text-green-400">Доступен сейчас</div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Время ответа</span>
                    </div>
                    <span className="text-sm text-primary font-medium">2-6 часов</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Спасено</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">€840K capital</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Кейсов решено</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">34 проблемы</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">Экспертов</span>
                    </div>
                    <span className="text-sm text-foreground/80 font-medium">Юрист + эксперт</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    SOS СЕЙЧАС
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Застройщик Задержал Сдачу На 18 Месяцев
          </h2>
        </div>
        
        <InvestorSOSProblemCarousel />
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Что Получаешь
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Zap, title: "Быстрый Ответ", desc: "2-6 часов до первой консультации" },
            { icon: Shield, title: "Юридический Анализ", desc: "Проверка договоров и прав" },
            { icon: FileText, title: "План Действий", desc: "Пошаговая инструкция 48ч" },
            { icon: MessageSquare, title: "Поддержка 24/7", desc: "Чат с экспертом" },
            { icon: FileText, title: "Шаблоны Писем", desc: "Претензии, жалобы, иски" },
            { icon: Users, title: "Опыт Комьюнити", desc: "Похожие кейсы решены" },
            { icon: Target, title: "Стратегия", desc: "Как добиться результата" },
            { icon: Award, title: "Суд Если Нужно", desc: "Подготовка к иску" },
            { icon: DollarSign, title: "Расчёт Убытков", desc: "Что можно требовать" },
            { icon: Phone, title: "Прямой Контакт", desc: "Телефон эксперта" },
            { icon: TrendingUp, title: "Обновления", desc: "Следим за ситуацией" },
            { icon: CheckCircle, title: "До Решения", desc: "Не бросаем пока не решено" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0">
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

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Как Работает SOS
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { icon: LifeBuoy, title: "ОТПРАВЛЯЕШЬ SOS", desc: "Описание проблемы. Документы если есть. Старт в течение 6 часов", step: "01" },
            { icon: FileText, title: "АНАЛИЗ + ПЛАН", desc: "Юрист смотрит документы. Эксперт анализирует ситуацию. План действий за 48ч", step: "02" },
            { icon: CheckCircle, title: "ВЫПОЛНЯЕШЬ ПЛАН", desc: "Пошаговая инструкция. Поддержка на каждом шаге. Решение проблемы", step: "03" }
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] relative">
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                  <span className="text-5xl md:text-6xl font-bold text-foreground/5 leading-none">{step.step}</span>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
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

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Кейс: Задержка 18 Месяцев
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Как SOS помог вернуть €85K и получить компенсацию за задержку
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Problem Card */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-grotesk text-xl font-bold">ПРОБЛЕМА</h3>
                  <p className="text-sm text-foreground/60">Batumi, €85,000</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                  <p className="text-sm text-foreground/70 mb-1">Куплено:</p>
                  <p className="text-foreground font-semibold">Квартира в Батуми за €85K</p>
                </div>
                
                <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                  <p className="text-sm text-foreground/70 mb-1">Обещали:</p>
                  <p className="text-foreground font-semibold">Сдача через 6 месяцев</p>
                </div>
                
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                  <p className="text-sm text-red-400 mb-1">Реальность:</p>
                  <p className="text-foreground font-semibold">24 месяца — стройка стоит</p>
                  <p className="text-sm text-foreground/70 mt-2">Застройщик не отвечает на звонки</p>
                </div>
              </div>
            </Card>
            
            {/* Solution Card */}
            <Card className="bg-card/40 backdrop-blur-xl border border-primary/30 p-8 rounded-[7px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <LifeBuoy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-grotesk text-xl font-bold text-primary">INVESTOR SOS</h3>
                  <p className="text-sm text-foreground/60">План действий за 36ч</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-grotesk text-sm font-semibold mb-3 text-primary">ЧТО СДЕЛАЛИ:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">План за 36 часов</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">Юрист проверил договор</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">Нашли нарушения условий</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/30">
                  <h4 className="font-grotesk text-sm font-semibold mb-3 text-primary">ДЕЙСТВИЯ:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">Претензия застройщику</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">Жалоба в надзор</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">Угроза судебного иска</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/30 p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-grotesk text-sm font-semibold mb-2 text-green-400">РЕЗУЛЬТАТ:</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-2">
                    Объект сдан через 4 месяца
                  </p>
                  <p className="text-lg font-bold text-primary">
                    Компенсация: €8,000
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Timeline */}
          <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
            <h3 className="font-grotesk text-xl font-bold mb-6 text-center">TIMELINE РЕШЕНИЯ</h3>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { day: "День 0", event: "SOS отправлен", icon: LifeBuoy },
                { day: "День 1", event: "Анализ договора", icon: FileText },
                { day: "День 2", event: "План готов", icon: CheckCircle },
                { day: "День 3", event: "Претензия", icon: FileText },
                { day: "День 10", event: "Жалоба в надзор", icon: Shield },
                { day: "День 14", event: "Ответ + решение", icon: CheckCircle }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xs font-medium text-primary mb-1">{item.day}</div>
                    <div className="text-xs text-foreground/70">{item.event}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            34 Проблемы Решено
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stage: "STAGE 1", title: "SOS", items: ["Проблема возникла", "Отправка запроса", "Ответ за 2-6ч"] },
              { stage: "STAGE 2", title: "АНАЛИЗ", items: ["Юрист + эксперт", "Проверка документов", "План за 48ч"] },
              { stage: "STAGE 3", title: "ДЕЙСТВИЯ", items: ["Выполнение плана", "Поддержка 24/7", "Корректировка"] },
              { stage: "STAGE 4", title: "РЕШЕНО", items: ["Проблема устранена", "Capital спасён", "€840K total"] }
            ].map((stage, index) => (
              <Card key={index} className="bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-[7px] relative">
                <div className="text-center mb-4">
                  <div className="text-sm text-foreground/60 mb-1">{stage.stage}</div>
                  <h3 className="font-grotesk text-2xl text-primary">{stage.title}</h3>
                </div>
                <ul className="space-y-2">
                  {stage.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80 text-center">
                      {item}
                    </li>
                  ))}
                </ul>
                {index < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Одна Консультация Может Спасти €85K
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
            Поддержка в сложных ситуациях. $59/месяц за защиту.
          </p>
          
          <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all mb-4">
              Получить Помощь →
            </Button>
          </a>
          
          <p className="text-sm text-foreground/60">
            Первые 100 членов: $59/мес навсегда | 7 дней бесплатно
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorSOS;
