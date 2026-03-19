import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { DashboardReport } from "@/components/DashboardReport";
import { NegotiationSyndicateProblemCarousel } from "@/components/NegotiationSyndicateProblemCarousel";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Users, Shield, Target, MessageSquare, Handshake, TrendingUp, Search, Award, DollarSign, Clock, Quote, Zap, BarChart3, AlertTriangle, LifeBuoy, Scale } from "lucide-react";

const NegotiationSyndicate = () => {
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
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Группа Торга</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Negotiation Syndicate<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Коллективные переговоры для лучших условий. Группы торга по объектам. Скидка 15-25% вместо 5%.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">3-10 в группе</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">18.4% скидка</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">€1.2M saved</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Найти Свою Группу →
              </Button>
            </a>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Syndicate Status</div>
                  <div className="text-xs text-foreground/60">12 переговоров сейчас</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-green-400 text-sm font-medium">Активных групп</span>
                <span className="text-green-400 font-bold">12</span>
              </div>
              
              <div className="bg-muted/50 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm">Средняя скидка</span>
                  </div>
                  <span className="text-sm text-primary font-medium">18.4%</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">Участников</span>
                  </div>
                  <span className="text-sm text-primary font-medium">3-10 в группе</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Успешных групп</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">47 сделок</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Экономия</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">€1.2M total</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <div className="text-center mb-2">
                  <span className="text-primary font-bold text-base">✓ СИЛА В ЧИСЛАХ</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-foreground/70">Новых групп: </span>
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
            Один Торгуется - 5%, Группа - 18%
          </h2>
        </div>
        
        <NegotiationSyndicateProblemCarousel />
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
              title: "Находишь Группу", 
              desc: "Твой объект/проект, 2-9 других интересуются, формируется синдикат", 
              step: "01" 
            },
            { 
              icon: Handshake, 
              title: "Группа Торгуется", 
              desc: "Коллективное предложение, сила в числах, лучшие условия", 
              step: "02" 
            },
            { 
              icon: CheckCircle, 
              title: "Все Экономят", 
              desc: "Скидка 15-25%, доп. бонусы, закрытие сделок", 
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
            Как Участвовать
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Search, title: "База Групп", desc: "Активные переговоры по объектам" },
            { icon: Target, title: "Объекты", desc: "Топ проектов с группами" },
            { icon: MessageSquare, title: "Чат Группы", desc: "Обсуждение условий" },
            { icon: FileText, title: "Коллективный LOI", desc: "Общее предложение застройщику" },
            { icon: Users, title: "Координатор", desc: "Ведёт переговоры за группу" },
            { icon: DollarSign, title: "Расчёт Скидки", desc: "Что получит каждый" },
            { icon: Scale, title: "Юр. Защита", desc: "Проверка договоров" },
            { icon: TrendingUp, title: "Отслеживание", desc: "Статус переговоров" },
            { icon: Shield, title: "Правила", desc: "Как работает синдикат" },
            { icon: MessageSquare, title: "Поддержка", desc: "Помощь 24/7" },
            { icon: Target, title: "Таргетинг", desc: "Уведомления о новых группах" },
            { icon: CheckCircle, title: "Закрытие", desc: "Помощь с оформлением" }
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
            Кейс: Группа 7 Человек
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Проект Montenegro Bay — коллективный торг принёс €18K каждому
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Main Stats Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 rounded-[7px]">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-card/40 rounded-lg border border-border/30">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-foreground/60 mb-1">Участников</div>
                <div className="text-2xl font-bold text-primary">7 человек</div>
              </div>
              <div className="text-center p-4 bg-card/40 rounded-lg border border-border/30">
                <DollarSign className="w-6 h-6 text-foreground/50 mx-auto mb-2" />
                <div className="text-sm text-foreground/60 mb-1">Запрос девелопера</div>
                <div className="text-2xl font-bold text-foreground/50">€135K/unit</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-primary mb-1">Группа договорилась</div>
                <div className="text-2xl font-bold text-primary">€117K/unit</div>
              </div>
              <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-green-400 mb-1">Скидка</div>
                <div className="text-2xl font-bold text-green-400">13.3%</div>
              </div>
            </div>
          </Card>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Group Members */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>Участники Синдиката</span>
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Алексей М.", unit: "1BR, 45m²", saved: "€18,000" },
                  { name: "Наталья К.", unit: "1BR, 45m²", saved: "€18,000" },
                  { name: "Дмитрий П.", unit: "2BR, 65m²", saved: "€18,000" },
                  { name: "Елена В.", unit: "1BR, 45m²", saved: "€18,000" },
                  { name: "Сергей Б.", unit: "1BR, 50m²", saved: "€18,000" },
                  { name: "Ольга Т.", unit: "2BR, 65m²", saved: "€18,000" },
                  { name: "Максим Л.", unit: "1BR, 45m²", saved: "€18,000" }
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/20 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{member.name}</div>
                        <div className="text-xs text-foreground/60">{member.unit}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-green-400">{member.saved}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/30 text-center">
                <div className="text-sm text-foreground/60 mb-1">Общая экономия группы:</div>
                <div className="text-3xl font-bold text-primary">€126,000</div>
              </div>
            </Card>
            
            {/* Negotiation Process */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-primary" />
                <span>Процесс Переговоров</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <span className="font-semibold text-foreground">Формирование группы</span>
                  </div>
                  <p className="text-sm text-foreground/70 ml-8">
                    7 человек нашли друг друга через комьюнити. Все интересуются Montenegro Bay.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <span className="font-semibold text-foreground">Коллективное предложение</span>
                  </div>
                  <p className="text-sm text-foreground/70 ml-8">
                    Координатор подготовил общий LOI: 7 юнитов = €819K вместо €945K.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <span className="font-semibold text-foreground">Переговоры с девелопером</span>
                  </div>
                  <p className="text-sm text-foreground/70 ml-8">
                    Девелопер изначально отказал. Но объём сделки и срочность убедили.
                  </p>
                </div>
                
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="font-semibold text-green-400">Результат</span>
                  </div>
                  <p className="text-sm text-foreground/70 ml-8">
                    Все 7 участников подписали контракты по €117K/unit. Экономия €18K каждому.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground/80 italic mb-2">
                      "Один я бы максимум 5% скидку получил. Группа дала силу — 13.3% и бонусы."
                    </p>
                    <div className="text-xs text-foreground/60">— Алексей М., участник синдиката</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-6">
            47 Успешных Групп
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            От формирования до закрытия
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">ФОРМИРУЕТСЯ</Badge>
              <h3 className="font-grotesk text-lg mb-2">Группа</h3>
              <p className="text-sm text-foreground/70 mb-2">3-10 участников</p>
              <p className="text-xs text-primary">Обсуждают условия</p>
            </Card>

            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">ПЕРЕГОВОРЫ</Badge>
              <h3 className="font-grotesk text-lg mb-2">Торг</h3>
              <p className="text-sm text-foreground/70 mb-2">Коллективное предложение</p>
              <p className="text-xs text-primary">Координатор ведёт</p>
            </Card>

            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">СОГЛАСОВАНО</Badge>
              <h3 className="font-grotesk text-lg mb-2">Принято</h3>
              <p className="text-sm text-foreground/70 mb-2">Застройщик принял</p>
              <p className="text-xs text-primary">Условия для всех</p>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">ЗАКРЫТО</Badge>
              <h3 className="font-grotesk text-lg mb-2">Сделки</h3>
              <p className="text-sm text-foreground/70 mb-2">Все подписали</p>
              <p className="text-xs text-primary">€18K+ каждому</p>
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
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">18.4%</div>
            <div className="text-sm text-foreground/60">Средняя скидка</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">47</div>
            <div className="text-sm text-foreground/60">Успешных групп</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">€1.2M</div>
            <div className="text-sm text-foreground/60">Total saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-foreground/60">Активных групп</div>
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
            Как группы получают лучшие условия
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "Один я получил бы 5% скидку. С группой из 7 человек - 18%. Сэкономал €18K благодаря синдикату.",
              author: "Павел Д.",
              role: "Group Member"
            },
            {
              quote: "Координатор вёл все переговоры профессионально. Группа дала силу, застройщик пошёл на уступки.",
              author: "Светлана Ф.",
              role: "Syndicate Participant"
            },
            {
              quote: "База групп постоянно обновляется. Нашёл свою группу за 2 дня. Результат превзошёл ожидания.",
              author: "Кирилл Ю.",
              role: "Real Estate Investor"
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

export default NegotiationSyndicate;
