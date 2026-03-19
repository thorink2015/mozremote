import { Layout } from "@/components/Layout";
import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Users, TrendingUp, Target, LifeBuoy, BarChart, FileText, ArrowRight, Quote, CreditCard, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import communityCover from "@/assets/community-cover.png";
import { HomeProblemCarousel } from "@/components/HomeProblemCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:pt-0 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6 w-fit">
              <span className="text-xs md:text-sm uppercase tracking-wider font-semibold text-primary whitespace-nowrap">Комьюнити</span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Property Invest Labs
            </h1>
            
            <p className="text-lg md:text-xl font-body text-foreground/70 mb-6 leading-relaxed">
              Комьюнити для инвесторов которые хотят защитить капитал и заработать. Профессиональные сервисы вместо дорогих консультантов.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground">
                8 сервисов
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground">
                Без ограничений
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground">
                $59/мес навсегда
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground">
                7 дней бесплатно
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-foreground">
                100+ инвесторов
              </span>
            </div>

            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 rounded-[7px] shadow-[0_0_30px_rgba(179,158,138,0.2)] active:scale-95 transition-all w-fit">
                Начать 7 Дней Бесплатно →
              </Button>
            </a>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/40 backdrop-blur-xl border border-white/10 p-0 rounded-[7px] overflow-hidden">
              <img 
                src={communityCover} 
                alt="Property Invest Labs Community" 
                className="w-full h-auto"
              />
            </Card>
          </div>
        </div>
      </section>


      {/* 8 Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            8 Сервисов Полного Цикла Инвестиций
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            От проверки объекта до выхода из инвестиции. Всё что нужно в одном месте.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { 
              icon: Shield, 
              title: "DEAL SHIELD", 
              heading: "Аудит Объекта За 48 Часов",
              text: "67 пунктов проверки. Юридический, технический, финансовый. Находим red flags до покупки.",
              badge: "Экономия €50K+",
              link: "/deal-shield"
            },
            { 
              icon: Zap, 
              title: "TERM-SHEET SPRINT", 
              heading: "LOI За 24 Часа",
              text: "Профессиональное письмо застройщику + 5 рычагов торга. Скидка 8-15% вместо 3%.",
              badge: "Экономия €23K+",
              link: "/term-sheet-sprint"
            },
            { 
              icon: Users, 
              title: "MANAGER TRIANGULATION", 
              heading: "3 Оффера УК За 72 Часа",
              text: "Сравнение управляющих компаний. Тарифы, SLA, репутация. Лучший выбор для объекта.",
              badge: "Экономия €1,680/год",
              link: "/manager-triangulation"
            },
            { 
              icon: BarChart, 
              title: "UNDERWRITING WALL", 
              heading: "Финмодели Недвижимости",
              text: "Еженедельно новый объект с полным разбором. Все формулы открыты. 52+ модели в базе.",
              badge: "52+ моделей",
              link: "/underwriting-wall"
            },
            { 
              icon: Target, 
              title: "NEGATIVE SCREENING", 
              heading: "Blacklist Плохих Сделок",
              text: "Real-time база проблемных застройщиков. 47+ в blacklist. Избегай ошибок других.",
              badge: "€2.1M спасено",
              link: "/negative-screening"
            },
            { 
              icon: FileText, 
              title: "NEGOTIATION SYNDICATE", 
              heading: "Группы Торга",
              text: "Коллективные переговоры 3-10 человек. Скидка 15-25% вместо 5%. Сила в числах.",
              badge: "Скидка 18% средняя",
              link: "/negotiation-syndicate"
            },
            { 
              icon: LifeBuoy, 
              title: "INVESTOR SOS", 
              heading: "24/7 Поддержка",
              text: "Застройщик обманул? УК не отвечает? План спасения за 48 часов. Юрист + эксперт.",
              badge: "Ответ за 2-6ч",
              link: "/investor-sos"
            },
            { 
              icon: TrendingUp, 
              title: "EXIT SIMULATOR", 
              heading: "Планирование Выхода",
              text: "5 сценариев выхода из инвестиции. Продать сейчас или через 3 года? Оптимизация ROI.",
              badge: "5 стратегий",
              link: "/exit-simulator"
            }
          ].map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px] hover:border-primary/30 hover:scale-[1.02] transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-primary mb-2">{service.title}</div>
                    <h3 className="font-grotesk text-lg mb-3 leading-tight">{service.heading}</h3>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{service.text}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-primary">{service.badge}</div>
                  <Link to={service.link}>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Подробнее <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
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
            Как Это Работает
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            { 
              title: "ПРИСОЕДИНЯЕШЬСЯ", 
              desc: "Регистрация за 2 минуты. 7 дней бесплатно. Доступ ко всем сервисам", 
              step: "01" 
            },
            { 
              title: "ИСПОЛЬЗУЕШЬ ИНСТРУМЕНТЫ", 
              desc: "Заказываешь аудиты, LOI. Проверяешь blacklist. Симулируешь exit", 
              step: "02" 
            },
            { 
              title: "РАСТЁШЬ С КОМЬЮНИТИ", 
              desc: "База знаний 100+ кейсов. Чат 24/7, вопросы-ответы. Коллективный опыт", 
              step: "03" 
            }
          ].map((step, index) => (
            <Card key={index} className="p-8 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] relative">
              <div className="absolute top-4 right-4 md:top-8 md:right-8">
                <span className="text-5xl md:text-6xl font-bold text-foreground/5 leading-none">{step.step}</span>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
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
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Results Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Результаты Комьюнити
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { value: "€1.2M+", label: "Capital Защищён", sub: "Saved & Earned" },
            { value: "100+", label: "Участников", sub: "Инвесторы со всего мира" },
            { value: "47", label: "Сделок Закрыто", sub: "С помощью сервисов" },
            { value: "52+", label: "Финмоделей", sub: "В базе знаний" }
          ].map((stat, i) => (
            <Card key={i} className="bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-[7px] text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-foreground/60">{stat.sub}</div>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Что Говорят Участники
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "Deal Shield спас меня от покупки квартиры с задержкой сдачи на 14 месяцев. Аудит нашёл 8 red flags. €78K остались в кармане.",
              author: "Андрей, Москва",
              stat: "Saved: €78,000"
            },
            {
              quote: "Negotiation Syndicate помог собрать группу из 6 человек. Вместо скидки 5% получили 18%. Плюс паркинг в подарок каждому.",
              author: "Мария, Тбилиси",
              stat: "Group: 6 investors, 18% discount"
            },
            {
              quote: "Investor SOS вытащил меня из проблемной ситуации с застройщиком. План за 48 часов, результат через месяц. Профессионально.",
              author: "Дмитрий, Дубай",
              stat: "Problem: Solved in 30 days"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-card/40 backdrop-blur-xl border border-white/10 p-8 rounded-[7px]">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-8 h-8 text-primary/40 flex-shrink-0" />
                <p className="text-foreground/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="border-t border-border/30 pt-4">
                <div className="font-semibold text-foreground mb-2">{testimonial.author}</div>
                <div className="text-sm text-primary font-medium">{testimonial.stat}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Простой Pricing
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Left: Pricing Card */}
          <Card className="bg-card/40 backdrop-blur-xl border-2 border-primary/30 p-8 md:p-10 rounded-[7px]">
            {/* Header Section */}
            <div className="text-center mb-6 pb-6 border-b border-border/30">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-primary">FOUNDING MEMBERS</span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">$59<span className="text-2xl text-foreground/60">/мес</span></div>
              <div className="text-base text-foreground/80 font-medium mb-2">Навсегда для первых 100 участников</div>
              <div className="text-sm text-foreground/60">Обычная цена: $99/мес после</div>
            </div>
            
            {/* Trial Section */}
            <div className="bg-primary/10 border border-primary/20 rounded-[7px] p-5 mb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-2xl">🎁</div>
                <div className="text-lg font-bold text-primary">7 ДНЕЙ БЕСПЛАТНО</div>
              </div>
              <div className="text-sm text-foreground/70">Попробуй все сервисы • Отмена в любой момент</div>
            </div>
            
            {/* CTA Button */}
            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-[7px] mb-4 shadow-[0_0_30px_rgba(179,158,138,0.2)]">
                НАЧАТЬ БЕСПЛАТНО →
              </Button>
            </a>
            
            {/* Footer Info */}
            <div className="text-center space-y-2">
              <div className="text-sm text-foreground/60">
                Без контракта • Отмена когда угодно
              </div>
              <div className="text-xs text-foreground/50">
                Покупка сервисов отдельно: $1,242+ за раз
              </div>
            </div>
          </Card>

          {/* Right: Features List */}
          <div className="space-y-3">
            {[
              { title: "ВСЕ 8 СЕРВИСОВ", desc: "Полный доступ к каждому инструменту" },
              { title: "БЕЗ ОГРАНИЧЕНИЙ", desc: "Используй столько раз, сколько нужно" },
              { title: "БАЗА ЗНАНИЙ", desc: "100+ кейсов и финмоделей" },
              { title: "КОМЬЮНИТИ 24/7", desc: "Опытные инвесторы всегда на связи" },
              { title: "ПОДДЕРЖКА", desc: "Ответ за 2-6 часов от экспертов" },
              { title: "ОБНОВЛЕНИЯ", desc: "Новые сервисы и функции еженедельно" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card/40 backdrop-blur-xl border border-white/10 rounded-[7px] p-4 hover:border-primary/30 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground mb-1">{item.title}</div>
                  <div className="text-sm text-foreground/70">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-3xl md:text-5xl lg:text-6xl mb-4">
            Частые Вопросы
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Это подходит для новичков?",
                a: "Да. 70% участников - первая инвестиция в недвижимость. Есть база знаний \"С нуля\" и поддержка 24/7."
              },
              {
                q: "Можно отменить подписку?",
                a: "Да, в любой момент. Без контракта и штрафов. 7 дней бесплатно - попробуй без риска."
              },
              {
                q: "Сколько раз можно использовать сервисы?",
                a: "Без ограничений. Хоть 10 аудитов в месяц, хоть 20 LOI. Всё включено в $59."
              },
              {
                q: "На каких языках поддержка?",
                a: "Русский и английский. Комьюнити русскоязычное, документы на английском если нужно."
              },
              {
                q: "Это только для определённых стран?",
                a: "Нет. Участники из РФ, ОАЭ, Грузии, США, ЕС. Сервисы работают для любых рынков."
              },
              {
                q: "Что если не понравится?",
                a: "7 дней бесплатно. Попробуй все сервисы. Не понравится - отмени, деньги не спишутся."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-[7px] px-6">
                <AccordionTrigger className="text-left font-grotesk text-base md:text-lg hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </Layout>
  );
};

export default Home;
