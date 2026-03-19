import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { DashboardReport } from "@/components/DashboardReport";
import { NegativeScreeningProblemCarousel } from "@/components/NegativeScreeningProblemCarousel";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Shield, AlertTriangle, Search, XCircle, Eye, Users, Scale, FileWarning, Building, DollarSign, Link, Gavel, Quote, Clock, Zap, BarChart3, Handshake, LifeBuoy, TrendingUp, MessageSquare, Image } from "lucide-react";

const NegativeScreening = () => {
  const services = [
    { icon: Shield, name: "Deal Shield" },
    { icon: Zap, name: "Term-Sheet Sprint" },
    { icon: Users, name: "Manager Triangul." },
    { icon: BarChart3, name: "Underwriting Wall" },
    { icon: AlertTriangle, name: "Negative Screening" },
    { icon: Handshake, name: "Negot. Syndicate" },
    { icon: LifeBuoy, name: "Investor SOS" },
    { icon: TrendingUp, name: "Exit Simulator" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Blacklist За 2 Минуты</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Negative Screening<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Real-time база проблемных застройщиков и объектов. Коллективный опыт комьюнити. 47+ в blacklist.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">47 в blacklist</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">Real-time</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">€2.1M saved</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Проверить Мой Объект →
              </Button>
            </a>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Blacklist Status</div>
                  <div className="text-xs text-foreground/60">Проверка по базе проблемных объектов</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-red-400 text-sm font-medium">База постоянно обновляется</span>
                <span className="text-red-400 font-bold">47</span>
              </div>
              
              <div className="bg-muted/50 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-sm">В blacklist</span>
                  </div>
                  <span className="text-sm text-red-400 font-medium">47 застройщиков</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Saved capital</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">€2.1M</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Участников</span>
                  </div>
                  <span className="text-sm text-primary font-medium">23 спасено</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Обновления</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">Real-time</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <div className="text-center mb-2">
                  <span className="text-primary font-bold text-base">✓ ЗАЩИТА КОМЬЮНИТИ</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-foreground/70">Новых проверок: </span>
                  <span className="text-sm font-semibold text-primary">Каждый день</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Чуть Не Потерял €78K Благодаря Blacklist
          </h2>
        </div>
        
        <NegativeScreeningProblemCarousel />
      </section>

      <SectionDivider />

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Как Работает
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { 
              icon: Search, 
              title: "Вводишь Данные", 
              desc: "Адрес, застройщик, проект - 2 минуты на проверку", 
              step: "01" 
            },
            { 
              icon: Shield, 
              title: "Система Проверяет", 
              desc: "База blacklist, судебные иски, отзывы комьюнити", 
              step: "02" 
            },
            { 
              icon: FileText, 
              title: "Получаешь Вердикт", 
              desc: "Зелёный: безопасно / Жёлтый: проверить детали / Красный: избегать", 
              step: "03" 
            }
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

      {/* What's Included Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Что Проверяем
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: AlertTriangle, title: "Blacklist Застройщиков", desc: "47+ проблемных девелоперов с доказательствами" },
            { icon: Gavel, title: "Судебные Иски", desc: "База исков, решения судов, долги" },
            { icon: Clock, title: "Задержки Сдачи", desc: "Проекты с задержкой 6+ месяцев" },
            { icon: FileText, title: "Разрешения", desc: "Проверка всех документов и лицензий" },
            { icon: DollarSign, title: "Финансы Застройщика", desc: "Долги, банкротства, проблемы" },
            { icon: Building, title: "Смена Названия", desc: "Девелоперы прячущие историю" },
            { icon: Users, title: "Отзывы Комьюнити", desc: "Real-time опыт других инвесторов" },
            { icon: FileWarning, title: "История Проектов", desc: "Все прошлые объекты девелопера" },
            { icon: XCircle, title: "Red Flags", desc: "15+ типов проблемных признаков" },
            { icon: Eye, title: "Доказательства", desc: "Фото, документы, факты" },
            { icon: CheckCircle, title: "Real-Time", desc: "База обновляется каждый день" },
            { icon: Quote, title: "Обсуждения", desc: "Комментарии других инвесторов" }
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

      {/* Sample Results Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Пример Blacklist Записи
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            "Golden Horizon Development" — 3 провальных проекта, €2.1M убытков инвесторов
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Alert Card */}
          <Card className="bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-xl border-2 border-red-500/30 p-8 rounded-[7px] mb-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-grotesk text-2xl font-bold text-red-400">BLACKLIST ALERT</h3>
                  <Badge className="bg-red-500 text-white border-red-600">ВЫСОКИЙ РИСК</Badge>
                </div>
                <p className="text-foreground/80 mb-4">
                  Застройщик находится в чёрном списке с подтверждёнными доказательствами мошенничества и задержек.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-card/40 rounded-lg border border-red-500/20">
                    <div className="text-sm text-foreground/60 mb-1">Дата добавления</div>
                    <div className="font-semibold text-foreground">12 марта 2024</div>
                  </div>
                  <div className="p-3 bg-card/40 rounded-lg border border-red-500/20">
                    <div className="text-sm text-foreground/60 mb-1">Жалоб</div>
                    <div className="font-semibold text-red-400">23 инвестора</div>
                  </div>
                  <div className="p-3 bg-card/40 rounded-lg border border-red-500/20">
                    <div className="text-sm text-foreground/60 mb-1">Убытки</div>
                    <div className="font-semibold text-red-400">€2.1M</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Company Info */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>Информация О Застройщике</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-sm text-foreground/60">Название:</span>
                  <span className="font-semibold text-foreground">Golden Horizon Development</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-sm text-foreground/60">Регистрация:</span>
                  <span className="font-semibold text-foreground">Тбилиси, Грузия</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-sm text-foreground/60">ИНН:</span>
                  <span className="font-mono text-foreground">405128674</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/30">
                  <span className="text-sm text-foreground/60">Основан:</span>
                  <span className="font-semibold text-foreground">2019</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-red-500/30">
                  <span className="text-sm text-foreground/60">Смена названия:</span>
                  <span className="font-semibold text-red-400">Да (2 раза)</span>
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                  <div className="text-xs text-red-400 mb-1">ПРЕДЫДУЩИЕ НАЗВАНИЯ:</div>
                  <div className="text-sm text-foreground/80">
                    • Horizon Real Estate (2019-2021)<br/>
                    • Golden Invest Group (2021-2023)
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Red Flags */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <span>Red Flags</span>
              </h3>
              
              <div className="space-y-3">
                {[
                  { 
                    title: "3 Провальных Проекта",
                    desc: "Batumi Towers, Tbilisi Plaza, Black Sea Resort — все с задержкой 12+ месяцев"
                  },
                  {
                    title: "Судебные Иски",
                    desc: "7 активных исков на общую сумму €840K от обманутых инвесторов"
                  },
                  {
                    title: "Финансовые Проблемы",
                    desc: "Долги перед банками €3.2M, процедура банкротства с 2023"
                  },
                  {
                    title: "Поддельные Документы",
                    desc: "Использовали фальшивые разрешения на строительство в 2022"
                  },
                  {
                    title: "Исчезающие Депозиты",
                    desc: "23 инвестора потеряли депозиты после отмены проектов"
                  }
                ].map((flag, i) => (
                  <div key={i} className="p-4 bg-red-500/5 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">{flag.title}</div>
                        <div className="text-sm text-foreground/70">{flag.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          {/* Evidence Section */}
          <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px] mt-8">
            <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Доказательства</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Gavel, label: "Решения судов", count: "7 документов" },
                { icon: FileWarning, label: "Жалобы инвесторов", count: "23 заявления" },
                { icon: Image, label: "Фото недостроев", count: "47 снимков" },
                { icon: Link, label: "Новостные статьи", count: "12 публикаций" },
                { icon: FileText, label: "Финансовые отчёты", count: "5 отчётов" },
                { icon: MessageSquare, label: "Отзывы комьюнити", count: "31 комментарий" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                    <div className="text-xs text-foreground/60">{item.count}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-orange-400 mb-1">РЕКОМЕНДАЦИЯ</div>
                  <p className="text-sm text-foreground/80">
                    Настоятельно рекомендуем избегать любых сделок с этим застройщиком. Высокий риск потери инвестиций.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-6">
            Как Растёт База
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Коллективная защита комьюнити
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">МЕСЯЦ 1</Badge>
              <h3 className="font-grotesk text-lg mb-2">12 в Blacklist</h3>
              <p className="text-sm text-foreground/70 mb-2">Первые застройщики</p>
              <p className="text-xs text-primary">Коллективная проверка</p>
            </Card>

            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">МЕСЯЦ 3</Badge>
              <h3 className="font-grotesk text-lg mb-2">28 в Blacklist</h3>
              <p className="text-sm text-foreground/70 mb-2">Больше данных</p>
              <p className="text-xs text-primary">€800K saved</p>
            </Card>

            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">МЕСЯЦ 6</Badge>
              <h3 className="font-grotesk text-lg mb-2">47 в Blacklist</h3>
              <p className="text-sm text-foreground/70 mb-2">База растёт</p>
              <p className="text-xs text-primary">€2.1M saved</p>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">REAL-TIME</Badge>
              <h3 className="font-grotesk text-lg mb-2">Постоянно</h3>
              <p className="text-sm text-foreground/70 mb-2">Каждый день</p>
              <p className="text-xs text-primary">Защита комьюнити</p>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      <SectionDivider />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">47</div>
            <div className="text-sm text-foreground/60">В Blacklist</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">€2.1M</div>
            <div className="text-sm text-foreground/60">Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">23</div>
            <div className="text-sm text-foreground/60">Спасено</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-foreground/60">Real-time</div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Отзывы Участников
          </h2>
          <p className="text-lg text-foreground/60">
            Как blacklist спас от плохих сделок
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "Negative Screening показал, что застройщик сменил название после 3 провальных проектов. Сэкономал €78K.",
              author: "Виктор С.",
              role: "Private Investor"
            },
            {
              quote: "Real-time база постоянно обновляется. Проверяю каждый объект перед депозитом. Уже дважды избежал проблем.",
              author: "Наталья Б.",
              role: "Real Estate Investor"
            },
            {
              quote: "Комьюнити делится опытом, все доказательства есть. Blacklist работает.",
              author: "Артём Г.",
              role: "Fund Manager"
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

export default NegativeScreening;
