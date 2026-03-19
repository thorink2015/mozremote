import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { UnderwritingWallProblemCarousel } from "@/components/UnderwritingWallProblemCarousel";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, DollarSign, TrendingUp, Shield, AlertTriangle, FileText, Calculator, BarChart, PieChart, MapPin, Building, Image, Clock, Zap, Users, BarChart3, Handshake, LifeBuoy, Quote } from "lucide-react";
import { DashboardReport } from "@/components/DashboardReport";

const UnderwritingWall = () => {
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
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Финмодели Недвижимости</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Underwriting Wall<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Еженедельные финмодели реальных объектов. Открытые расчёты, формулы, допущения. 52+ модели в базе.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">52+ модели</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">Каждую неделю</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Calculator className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">Все формулы</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Смотреть Модель Недели →
              </Button>
            </a>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <BarChart className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Модель Недели</div>
                  <div className="text-xs text-foreground/60">Montenegro Beach - готова</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-green-400 text-sm font-medium">Анализ завершён</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              
              <div className="bg-muted/50 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-sm">NET YIELD</span>
                  </div>
                  <span className="text-sm text-primary font-medium">7.2%</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-sm">Cash-on-Cash</span>
                  </div>
                  <span className="text-sm text-primary font-medium">23.8%</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">ROI (5 лет)</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">66%</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-sm">В базе</span>
                  </div>
                  <span className="text-sm text-primary font-medium">52+ модели</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <div className="text-center mb-2">
                  <span className="text-green-400 font-bold text-base">✓ ВСЕ ФОРМУЛЫ ОТКРЫТЫ</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-foreground/70">Модели в неделю: </span>
                  <span className="text-sm font-semibold text-primary">1 новая</span>
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
            Застройщик Обещал 12% Yield. Реально 3.4%
          </h2>
        </div>
        
        <UnderwritingWallProblemCarousel />
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
              icon: FileText, 
              title: "Получаешь Модель", 
              desc: "Каждый понедельник новая модель реального объекта с ценой и локацией", 
              step: "01" 
            },
            { 
              icon: BarChart, 
              title: "Изучаешь Цифры", 
              desc: "Все формулы открыты, допущения объяснены, можно задать вопросы в комьюнити", 
              step: "02" 
            },
            { 
              icon: CheckCircle, 
              title: "Применяешь К Своим", 
              desc: "Копируешь формулы, адаптируешь под свой объект и принимаешь решение", 
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
            Что В Каждой Модели
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: DollarSign, title: "Цена И Условия", desc: "Стоимость, первый взнос, рассрочка, налоги" },
            { icon: TrendingUp, title: "Доходы Детально", desc: "Аренда, сезонность, заселённость, тарифы" },
            { icon: BarChart, title: "Все Расходы", desc: "Управление, налоги, ремонты, страховка, резервы" },
            { icon: Calculator, title: "Ключевые Метрики", desc: "Gross Yield, Net Yield, Cash-on-Cash, IRR" },
            { icon: TrendingUp, title: "Exit Стратегия", desc: "Цена через 5 лет, ROI, накопленный доход" },
            { icon: PieChart, title: "Чувствительность", desc: "Как цифры меняются при разных сценариях" },
            { icon: FileText, title: "Все Формулы", desc: "Excel/Google Sheets файл с расчётами" },
            { icon: FileText, title: "Допущения", desc: "Каждое число обосновано и объяснено" },
            { icon: AlertTriangle, title: "Риски", desc: "Что может пойти не так, как страховаться" },
            { icon: Building, title: "Застройщик", desc: "Анализ девелопера, надёжность, проекты" },
            { icon: MapPin, title: "Локация", desc: "Район, инфраструктура, перспективы" },
            { icon: Image, title: "Фото + Планы", desc: "Визуализация, планировки, виды" }
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
            Модель Недели: Montenegro Beach
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Полная финансовая модель с открытыми формулами и реальными допущениями
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Key Metrics Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-8 rounded-[7px]">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-card/40 rounded-lg border border-border/30">
                <BarChart className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-foreground/60 mb-1">Gross Yield</div>
                <div className="text-2xl font-bold text-primary">9.8%</div>
              </div>
              <div className="text-center p-4 bg-card/40 rounded-lg border border-border/30">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-foreground/60 mb-1">Net Yield</div>
                <div className="text-2xl font-bold text-primary">7.2%</div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-primary mb-1">Cash-on-Cash</div>
                <div className="text-2xl font-bold text-primary">23.8%</div>
              </div>
              <div className="text-center p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-green-400 mb-1">ROI (5 лет)</div>
                <div className="text-2xl font-bold text-green-400">66%</div>
              </div>
            </div>
          </Card>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Property Details */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>Параметры Объекта</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="text-xs text-foreground/60 mb-2">ПОКУПКА</div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/80">Цена объекта:</span>
                    <span className="font-bold text-foreground">€120,000</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-foreground/80">Первый взнос (30%):</span>
                    <span className="font-bold text-primary">€36,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground/80">Рассрочка:</span>
                    <span className="font-semibold text-foreground">€84,000</span>
                  </div>
                </div>
                
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <div className="text-xs text-foreground/60 mb-2">ХАРАКТЕРИСТИКИ</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Площадь:</span>
                      <span className="font-semibold text-foreground">45 m²</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Спален:</span>
                      <span className="font-semibold text-foreground">1BR</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Вид:</span>
                      <span className="font-semibold text-foreground">Море</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Локация:</span>
                      <span className="font-semibold text-foreground">Будва, Montenegro</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="text-xs text-primary mb-2">ЗАСТРОЙЩИК</div>
                  <div className="font-semibold text-foreground mb-1">Montenegro Riviera Development</div>
                  <div className="text-sm text-foreground/70">Рейтинг: 4.2/5 • 8 проектов сдано</div>
                </div>
              </div>
            </Card>
            
            {/* Income & Expenses */}
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                <span>Доходы И Расходы</span>
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                  <div className="text-xs text-green-400 mb-3">ДОХОДЫ (ГОД)</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Аренда (220 дней):</span>
                      <span className="font-bold text-green-400">€11,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Средняя ставка:</span>
                      <span className="text-sm text-foreground/60">€50/ночь</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Заселённость:</span>
                      <span className="text-sm text-foreground/60">60% (сезонная)</span>
                    </div>
                    <div className="pt-2 border-t border-green-500/30 flex justify-between items-center">
                      <span className="text-sm font-semibold text-green-400">Gross Rental Income:</span>
                      <span className="font-bold text-green-400">€11,760/год</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                  <div className="text-xs text-red-400 mb-3">РАСХОДЫ (ГОД)</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Управление (10%):</span>
                      <span className="text-sm text-red-400">€1,176</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Налог на аренду:</span>
                      <span className="text-sm text-red-400">€1,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Коммунальные:</span>
                      <span className="text-sm text-red-400">€600</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Ремонты (резерв):</span>
                      <span className="text-sm text-red-400">€800</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/80">Страховка:</span>
                      <span className="text-sm text-red-400">€400</span>
                    </div>
                    <div className="pt-2 border-t border-red-500/30 flex justify-between items-center">
                      <span className="text-sm font-semibold text-red-400">Total Expenses:</span>
                      <span className="font-bold text-red-400">€4,176/год</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-primary">Net Operating Income:</span>
                    <span className="text-xl font-bold text-primary">€8,584/год</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Formulas & Assumptions */}
          <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
            <h3 className="font-grotesk text-xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Формулы И Допущения</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-grotesk text-sm font-semibold mb-4 text-primary">ФОРМУЛЫ РАСЧЁТА</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="p-3 bg-muted/20 rounded border border-border/30">
                    <div className="text-xs text-foreground/60 mb-1">Gross Yield:</div>
                    <div className="text-primary">= (11,760 / 120,000) × 100 = 9.8%</div>
                  </div>
                  <div className="p-3 bg-muted/20 rounded border border-border/30">
                    <div className="text-xs text-foreground/60 mb-1">Net Yield:</div>
                    <div className="text-primary">= (8,584 / 120,000) × 100 = 7.2%</div>
                  </div>
                  <div className="p-3 bg-muted/20 rounded border border-border/30">
                    <div className="text-xs text-foreground/60 mb-1">Cash-on-Cash:</div>
                    <div className="text-primary">= (8,584 / 36,000) × 100 = 23.8%</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-grotesk text-sm font-semibold mb-4 text-primary">КЛЮЧЕВЫЕ ДОПУЩЕНИЯ</h4>
                <div className="space-y-2">
                  {[
                    "Заселённость 60% — консервативно для Montenegro",
                    "Ставка €50/ночь — средняя по рынку Будвы",
                    "Рост цены 6% годовых — исторические данные",
                    "Управление 10% — стандарт для туристических",
                    "Резерв на ремонт €800 — 0.67% от стоимости",
                    "Налог на аренду — фиксированный сбор Montenegro"
                  ].map((assumption, i) => (
                    <div key={i} className="flex items-start gap-2 p-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{assumption}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-green-400 mb-1">EXCEL ФАЙЛ ДОСТУПЕН</div>
                  <div className="text-xs text-foreground/60">Скачай модель, адаптируй под свой объект</div>
                </div>
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                  Скачать .xlsx
                </Button>
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
            52+ Модели В Базе
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Еженедельные финмодели реальных объектов из разных рынков
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">НЕДЕЛЯ 1</Badge>
              <h3 className="font-grotesk text-lg mb-2">Montenegro Beach</h3>
              <p className="text-sm text-foreground/70 mb-2">€120K, 1BR</p>
              <p className="text-xs text-primary">Yield: 7.2%</p>
            </Card>

            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">НЕДЕЛЯ 2</Badge>
              <h3 className="font-grotesk text-lg mb-2">Batumi Downtown</h3>
              <p className="text-sm text-foreground/70 mb-2">€85K, studio</p>
              <p className="text-xs text-primary">Yield: 8.1%</p>
            </Card>

            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">НЕДЕЛЯ 3</Badge>
              <h3 className="font-grotesk text-lg mb-2">Dubai Marina</h3>
              <p className="text-sm text-foreground/70 mb-2">€210K, 1BR</p>
              <p className="text-xs text-primary">Yield: 5.8%</p>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-xl border border-primary/20 p-6 rounded-[7px] text-center">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">ВСЯ БАЗА</Badge>
              <h3 className="font-grotesk text-lg mb-2">52+ Модели</h3>
              <p className="text-sm text-foreground/70 mb-2">Все рынки</p>
              <p className="text-xs text-primary">Полный доступ</p>
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
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">7.2%</div>
            <div className="text-sm text-foreground/60">NET YIELD</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">52+</div>
            <div className="text-sm text-foreground/60">Модели</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">72</div>
            <div className="text-sm text-foreground/60">Часа</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-foreground/60">Метрик</div>
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
            Что говорят пользователи моделей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "Еженедельные модели — это готовая база знаний. Копирую формулы для своих объектов и адаптирую. Сэкономил месяцы обучения.",
              author: "Олег Н.",
              role: "Private Investor"
            },
            {
              quote: "Прозрачность на 100%. Все формулы, все допущения объяснены. Наконец понял, как правильно строить финмодели недвижимости.",
              author: "Ирина Л.",
              role: "Fund Analyst"
            },
            {
              quote: "52+ модели из разных рынков — это невероятная ценность. Вижу паттерны, учусь на реальных кейсах.",
              author: "Максим З.",
              role: "Real Estate Developer"
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

export default UnderwritingWall;
