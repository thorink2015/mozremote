import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { ExitSimulatorProblemCarousel } from "@/components/ExitSimulatorProblemCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, DollarSign, Clock, Target, Calendar, BarChart, ArrowRight, Users, Home, Zap } from "lucide-react";

const ExitSimulator = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Стратегия Выхода</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Exit Simulator<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Симулятор стратегий выхода. 5 сценариев с цифрами. Оптимальный таймлайн. Максимизация ROI.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">5 сценариев</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">ROI анализ</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">1-10 лет</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Симулировать Выход →
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-grotesk font-bold mb-1">SIMULATOR STATUS</div>
                  <div className="text-xs text-foreground/60">Готов к симуляции</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-foreground/60 mb-1">Новая симуляция:</div>
                  <div className="text-lg font-bold text-green-400">Готов начать</div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm">Сценариев</span>
                    </div>
                    <span className="text-sm text-primary font-medium">5 стратегий</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">Горизонт</span>
                    </div>
                    <span className="text-sm text-primary font-medium">1-10 лет</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm">MAX ROI найдено</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">127% за 4 года</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Симуляций готово</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">89 объектов</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">НАЧАТЬ СИМУЛЯЦИЮ</Button>
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
            Продал Рано - Потерял €42K Прибыли
          </h2>
        </div>
        
        <ExitSimulatorProblemCarousel />
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            5 Стратегий Выхода
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Home, title: "Продать Сейчас", desc: "Быстрый выход, текущая прибыль" },
            { icon: Calendar, title: "Держать 1 Год", desc: "Аренда + рост цены" },
            { icon: TrendingUp, title: "Держать 3 Года", desc: "Максимум аренды + рост" },
            { icon: BarChart, title: "Держать 5 Лет", desc: "Долгосрок + реинвест" },
            { icon: Target, title: "Держать 10 Лет", desc: "Пенсионный актив" },
            { icon: DollarSign, title: "ROI Каждого", desc: "Точный расчёт доходности" },
            { icon: TrendingUp, title: "График Роста", desc: "Визуализация стоимости" },
            { icon: DollarSign, title: "Cash Flow", desc: "Денежный поток по годам" },
            { icon: BarChart, title: "Налоги", desc: "Учёт налоговой нагрузки" },
            { icon: TrendingUp, title: "Рынок", desc: "Прогноз роста региона" },
            { icon: TrendingUp, title: "Реинвест", desc: "Что делать с выручкой" },
            { icon: CheckCircle, title: "Рекомендация", desc: "Лучшая стратегия для тебя" }
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
            Как Работает
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { icon: Target, title: "ВВОДИШЬ ДАННЫЕ", desc: "Объект, цена, условия. Твой горизонт (1-10 лет). Желаемый ROI", step: "01" },
            { icon: BarChart, title: "СИСТЕМА СИМУЛИРУЕТ", desc: "5 стратегий выхода. Расчёт всех сценариев. Учёт роста рынка", step: "02" },
            { icon: CheckCircle, title: "ВИДИШЬ ЛУЧШУЮ", desc: "Сравнение ROI. Оптимальный таймлайн. Рекомендация", step: "03" }
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
            Симуляция: Montenegro 1BR
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            5 стратегий выхода с точными цифрами ROI и доходности
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Card */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-grotesk text-xl font-bold">ОБЪЕКТ</h3>
                  <p className="text-sm text-foreground/60">Montenegro Beach Resort</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-foreground/70">Покупка:</span>
                    <span className="font-semibold text-foreground">€120,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">Тип:</span>
                    <span className="font-semibold text-foreground">1BR, 45m²</span>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-foreground/70">Аренда/год:</span>
                    <span className="font-semibold text-primary">€12,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/70">Рост цены:</span>
                    <span className="font-semibold text-primary">8% / год</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/30">
                <h4 className="font-grotesk text-sm font-semibold mb-4 text-foreground/80">ПАРАМЕТРЫ СИМУЛЯЦИИ:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Учёт налогов и расходов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Прогноз роста рынка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Накопленная аренда</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Стоимость продажи</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Results Card */}
            <Card className="bg-card/40 backdrop-blur-xl border border-primary/30 p-8 rounded-[7px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-grotesk text-xl font-bold text-primary">5 СТРАТЕГИЙ</h3>
                  <p className="text-sm text-foreground/60">Горизонт: 1-10 лет</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { num: "1", title: "Продать сейчас", value: "€140K", roi: "16.7%", note: "Быстрый выход" },
                  { num: "2", title: "Держать 1 год", value: "€154K", roi: "38.3%", note: "+ Аренда €12K" },
                  { num: "3", title: "Держать 3 года", value: "€186K", roi: "85%", note: "+ Аренда €36K", highlight: true },
                  { num: "4", title: "Держать 5 лет", value: "€228K", roi: "140%", note: "+ Аренда €60K" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`p-4 rounded-lg border ${
                      item.highlight 
                        ? 'bg-primary/10 border-primary/30' 
                        : 'bg-muted/30 border-border/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full ${
                        item.highlight 
                          ? 'bg-primary/20 border-2 border-primary' 
                          : 'bg-card/40 border border-border/30'
                      } flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-sm font-bold ${
                          item.highlight ? 'text-primary' : 'text-foreground/60'
                        }`}>{item.num}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-semibold text-sm ${
                            item.highlight ? 'text-primary' : 'text-foreground'
                          }`}>{item.title}</span>
                          <span className={`font-bold ${
                            item.highlight ? 'text-primary' : 'text-foreground'
                          }`}>{item.value}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-foreground/60">{item.note}</span>
                          <span className={`text-xs font-semibold ${
                            item.highlight ? 'text-primary' : 'text-foreground/70'
                          }`}>ROI: {item.roi}</span>
                        </div>
                        {item.highlight && (
                          <div className="mt-2 pt-2 border-t border-primary/30">
                            <span className="text-xs font-semibold text-primary">✓ ОПТИМАЛЬНЫЙ БАЛАНС</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Recommendation Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 rounded-[7px]">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-grotesk text-2xl font-bold mb-3 text-primary">РЕКОМЕНДАЦИЯ</h3>
              <p className="text-lg text-foreground/80 mb-2">Держать 3-5 лет</p>
              <p className="text-sm text-foreground/60 mb-6">Оптимальное соотношение ROI и временных затрат</p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-card/40 rounded-lg border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">85-140%</div>
                  <div className="text-xs text-foreground/60">ROI диапазон</div>
                </div>
                <div className="p-4 bg-card/40 rounded-lg border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">€36-60K</div>
                  <div className="text-xs text-foreground/60">Аренда накоплен.</div>
                </div>
                <div className="p-4 bg-card/40 rounded-lg border border-border/30">
                  <div className="text-2xl font-bold text-primary mb-1">€186-228K</div>
                  <div className="text-xs text-foreground/60">Цена продажи</div>
                </div>
              </div>
              
              <Button className="w-full md:w-auto px-8">СКАЧАТЬ ПОЛНЫЙ ОТЧЁТ</Button>
            </div>
          </Card>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Сравнение 5 Стратегий
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { stage: "STAGE 1", title: "СЕЙЧАС", amount: "€140K", roi: "ROI: 16.7%" },
              { stage: "STAGE 2", title: "1 ГОД", amount: "€166K", roi: "ROI: 38.3%" },
              { stage: "STAGE 3", title: "3 ГОДА ✅", amount: "€222K", roi: "ROI: 85%", highlight: "ОПТИМУМ" },
              { stage: "STAGE 4", title: "5 ЛЕТ", amount: "€288K", roi: "ROI: 140%" },
              { stage: "STAGE 5", title: "10 ЛЕТ", amount: "€432K", roi: "ROI: 260%" }
            ].map((stage, index) => (
              <Card key={index} className={`bg-card/40 backdrop-blur-md border ${stage.highlight ? 'border-primary/30 bg-primary/5' : 'border-white/10'} p-6 rounded-[7px] relative`}>
                <div className="text-center">
                  <div className="text-sm text-foreground/60 mb-2">{stage.stage}</div>
                  <h3 className={`font-grotesk text-xl mb-3 ${stage.highlight ? 'text-primary' : 'text-foreground'}`}>{stage.title}</h3>
                  <div className={`text-2xl font-bold mb-2 ${stage.highlight ? 'text-primary' : 'text-foreground'}`}>{stage.amount}</div>
                  <div className="text-sm text-foreground/70">{stage.roi}</div>
                  {stage.highlight && (
                    <div className="mt-2 text-sm font-semibold text-primary">{stage.highlight}</div>
                  )}
                </div>
                {index < 4 && (
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
            Правильный Выход Даёт +€42K К Прибыли
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
            5 стратегий выхода. $59/месяц за инструменты.
          </p>
          
          <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all mb-4">
              Симулировать Выход →
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

export default ExitSimulator;
