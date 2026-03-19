import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { ManagerTriangulationProblemCarousel } from "@/components/ManagerTriangulationProblemCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, FileText, Users, TrendingUp, Shield, AlertTriangle, Award, Clock, FileCheck, Quote, Search, Target, Database, DollarSign, Scale, Phone, Lightbulb, Home, BarChart3, ArrowRight } from "lucide-react";

const ManagerTriangulation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Сравнение УК За 72 Часа</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Manager Triangulation<sup className="text-xs md:text-sm align-super">™</sup>
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-10 leading-relaxed">
              Сравниваем 3 управляющие компании за 72 часа. Получишь детальный анализ и лучший тариф для твоего объекта
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <FileCheck className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">3 оффера УК</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">72 часа</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">€1,680+ экономия</span>
              </div>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Запустить Сравнение →
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">Статус Сравнения</div>
                  <div className="text-xs text-foreground/60">Типичный выбор без анализа</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-red-400 text-sm font-medium">Переплата обнаружена</span>
                <span className="text-red-400 font-bold">7/10</span>
              </div>
              
              <div className="bg-muted/50 rounded-full h-2 mb-4">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Тариф УК</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">OK</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">Лицензия</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">OK</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">Скрытые доплаты</span>
                  </div>
                  <span className="text-sm text-yellow-400 font-medium">Есть</span>
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span className="text-sm">SLA качество</span>
                  </div>
                  <span className="text-sm text-red-400 font-medium">48ч</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <div className="text-center mb-2">
                  <span className="text-red-400 font-bold text-base">⚠️ МОЖНО ЛУЧШЕ</span>
                </div>
                <div className="text-center">
                  <span className="text-sm text-foreground/70">Экономия: </span>
                  <span className="text-sm font-semibold text-primary">€1,680/год</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Выбрал УК И Теперь Переплачиваю €140/Месяц
          </h2>
        </div>
        
        <ManagerTriangulationProblemCarousel />
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Что Проверяем За 72 Часа
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: FileCheck, title: "3 Детальных Оффера", desc: "Полные прайс-листы от проверенных компаний твоего города" },
            { icon: DollarSign, title: "Сравнение Тарифов", desc: "Фикс + % от аренды, все включено или с доплатами" },
            { icon: Clock, title: "SLA Проверка", desc: "Время ответа, скорость решения проблем, доступность" },
            { icon: Award, title: "Анализ Репутации", desc: "120+ отзывов реальных клиентов, проблемные кейсы" },
            { icon: Search, title: "Скрытые Расходы", desc: "Что НЕ включено: уборка, ремонты, доп. услуги" },
            { icon: Scale, title: "Юридическая Проверка", desc: "Условия договора, штрафы, условия расторжения" },
            { icon: Shield, title: "Лицензии И Страховка", desc: "Проверка легальности, страховое покрытие" },
            { icon: BarChart3, title: "Сравнительная Таблица", desc: "15 параметров side-by-side, лучший выделен" },
            { icon: Home, title: "Airbnb Специфика", desc: "Управление бронированиями, ценообразование, сервис" },
            { icon: Phone, title: "Контакты Менеджеров", desc: "Прямые номера для быстрой связи и договора" },
            { icon: Lightbulb, title: "Экспертная Рекомендация", desc: "Наш вердикт: какую компанию выбрать и почему" },
            { icon: TrendingUp, title: "ROI Оптимизация", desc: "Как выбор УК влияет на доходность объекта" }
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

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Как Работает Triangulation
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { icon: FileCheck, title: "Отправляешь Данные", desc: "Тип объекта, локация, твои требования к УК. Старт 72-часового поиска", step: "01" },
            { icon: Search, title: "Мы Проверяем УК", desc: "Связываемся с компаниями, проверяем тарифы и отзывы, анализируем договоры", step: "02" },
            { icon: BarChart3, title: "Получаешь Сравнение", desc: "3 детальных оффера, таблица сравнения, наша рекомендация", step: "03" }
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
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Пример Сравнительной Таблицы
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Top: Text Description */}
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              Вот как выглядит финальное сравнение трех управляющих компаний для 1BR квартиры в Батуми.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h3 className="font-grotesk text-lg font-semibold mb-3">Мы проверили 3 УК за 72 часа:</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Проверили тарифы и условия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Изучили 120+ отзывов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Нашли скрытые расходы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Сравнили SLA и качество</span>
                  </li>
                </ul>
              </div>
              
              <Card className="bg-primary/10 border-primary/30 p-6 rounded-[7px]">
                <h3 className="font-grotesk text-xl mb-4 text-primary">ИТОГ:</h3>
                <div className="space-y-2 text-foreground/80">
                  <p className="font-semibold">УК #2 - лучший выбор</p>
                  <p>Экономия: €140/месяц</p>
                  <p>Без скрытых доплат</p>
                  <p>Отличный SLA (2ч ответ)</p>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Bottom: Dashboard Card - Full Width */}
          <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/30">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-lg mb-1">MANAGER TRIANGULATION RESULTS</div>
                <div className="text-sm text-foreground/60">Батуми, 1BR, Airbnb</div>
              </div>
              <div className="text-sm font-bold text-green-400">СТАТУС: ✅ 3 ОФФЕРА ГОТОВО</div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold">УК #1</div>
                  <div className="text-xs text-foreground/60">Рейтинг: 3.8/5 ⭐</div>
                </div>
                <div className="text-2xl font-bold text-foreground/80 mb-2">€120/мес + 12%</div>
                <div className="text-sm text-foreground/70 space-y-1">
                  <div>SLA: 24ч ответ</div>
                  <div className="text-yellow-400">Средние условия</div>
                </div>
              </div>
              
              <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/40">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold text-primary flex items-center gap-2">
                    УК #2 
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">ЛУЧШИЙ</span>
                  </div>
                  <div className="text-xs text-foreground/60">Рейтинг: 4.7/5 ⭐</div>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">€95/мес + 10%</div>
                <div className="text-sm text-foreground/70 space-y-1">
                  <div>SLA: 2ч ответ</div>
                  <div className="text-green-400 font-medium">Без скрытых доплат</div>
                  <div className="text-primary font-medium">Экономия: €140/мес</div>
                </div>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg border border-border/30">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold">УК #3</div>
                  <div className="text-xs text-foreground/60">Рейтинг: 3.2/5 ⭐</div>
                </div>
                <div className="text-2xl font-bold text-foreground/80 mb-2">€85/мес + 15%</div>
                <div className="text-sm text-foreground/70 space-y-1">
                  <div>SLA: 48ч ответ</div>
                  <div className="text-destructive">Много жалоб на сервис</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-primary mb-1">💰 РЕКОМЕНДАЦИЯ: УК #2</div>
                <div className="text-sm text-foreground/70">
                  Лучший баланс цена/качество • Экономия €140/месяц
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Контакт УК #2
                </Button>
                <Button variant="outline">
                  Полный Отчёт
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Реальный Кейс: Батуми 1BR
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                badge: "ДЕНЬ 0",
                title: "Купил Квартиру",
                items: [
                  "Батуми, 1BR под Airbnb",
                  "Нужна управляющая компания",
                  "",
                  "Заказал Triangulation",
                  "Отправил данные объекта"
                ],
                arrow: "72 часа"
              },
              {
                icon: FileCheck,
                badge: "ДЕНЬ 3",
                title: "Получил 3 Оффера",
                items: [
                  "УК #1: €120/мес + 12%",
                  "УК #2: €95/мес + 10% ✅",
                  "УК #3: €85/мес + 15%",
                  "",
                  "Детальное сравнение готово"
                ],
                arrow: "Выбор"
              },
              {
                icon: CheckCircle,
                badge: "ДЕНЬ 4",
                title: "Подписал С УК #2",
                items: [
                  "Лучший баланс цена/качество",
                  "Отличные отзывы (4.7/5)",
                  "SLA 2 часа",
                  "Без скрытых доплат"
                ],
                arrow: "6 месяцев"
              },
              {
                icon: Award,
                badge: "РЕЗУЛЬТАТ",
                title: "Сэкономил €840",
                items: [
                  "6 месяцев работы: отлично",
                  "",
                  "Экономия vs УК #1:",
                  "€140/мес × 6 = €840",
                  "",
                  "💰 ЗА ГОД: €1,680"
                ]
              }
            ].map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-primary">{stage.badge}</span>
                  </div>
                  
                  <h3 className="font-grotesk text-lg mb-4 leading-tight">{stage.title}</h3>
                  
                  <div className="space-y-2 text-sm text-foreground/70">
                    {stage.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={item === "" ? "h-2" : ""}>
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  {stage.arrow && index < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="flex items-center gap-1 text-xs text-foreground/40">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">€1,680+</div>
            <div className="text-sm text-foreground/60">Экономия/год</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-foreground/60">Сравнений</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">72</div>
            <div className="text-sm text-foreground/60">Часа</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3</div>
            <div className="text-sm text-foreground/60">Оффера УК</div>
          </div>
        </div>
      </section>

      <SectionDivider />

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
              quote: "Manager Triangulation сэкономил нам €1,400 в год. Нашли лучшую УК за 3 дня.",
              author: "Дмитрий С.",
              role: "Property Owner"
            },
            {
              quote: "72 часа — и три детальных оффера на столе. Выбрал лучшее предложение.",
              author: "Ирина М.",
              role: "Investor"
            },
            {
              quote: "Профессиональное сравнение управляющих компаний. Теперь экономлю каждый месяц.",
              author: "Алексей К.",
              role: "Real Estate Investor"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />
                <p className="text-foreground/80 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
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

export default ManagerTriangulation;
