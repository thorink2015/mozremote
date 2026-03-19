import { useState, useCallback, useEffect } from "react";
import { SlidesSidebar } from "@/components/SlidesSidebar";
import { SlideRenderer } from "@/components/SlideRenderer";
import { MobileNav } from "@/components/MobileNav";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const slides = [
  { id: 0, title: "MOZ Remote Solutions" },
  { id: 1, title: "О компании" },
  { id: 2, title: "Для кого" },
  { id: 3, title: "Суть партнёрства" },
  { id: 4, title: "Выгоды партнёра" },
  { id: 5, title: "Повторный доход" },
  { id: 6, title: "Гибкость модели" },
  { id: 7, title: "Простой старт" },
  { id: 8, title: "Почему доверяют" },
  { id: 9, title: "Подбор решений" },
  { id: 10, title: "Международная команда" },
  { id: 11, title: "Реальные кейсы" },
  { id: 12, title: "Идеальный инвестор" },
  { id: 13, title: "Заработок партнёра" },
  { id: 14, title: "Земля в США" },
  { id: 15, title: "Синдикат МО" },
  { id: 16, title: "Грузия" },
  { id: 17, title: "Что получает партнёр" },
  { id: 18, title: "Пошаговый процесс" },
  { id: 19, title: "Шаблоны сообщений" },
  { id: 20, title: "FAQ" },
  { id: 21, title: "Стать партнёром" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const goNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const goPrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-background">
      {/* Desktop Sidebar */}
      <SlidesSidebar
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={goTo}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 relative h-screen overflow-hidden">
        {/* Mobile Nav */}
        <MobileNav
          slides={slides}
          currentSlide={currentSlide}
          onSlideSelect={goTo}
        />

        {/* Slide Area */}
        <div className="h-full w-full overflow-y-auto">
          <SlideRenderer slideIndex={currentSlide} />
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex absolute bottom-8 right-8 items-center gap-3 z-20">
          <span className="text-sm text-foreground/40 mr-2">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={goPrev}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 hover:bg-primary/20 disabled:opacity-20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 hover:bg-primary/20 disabled:opacity-20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="md:hidden absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4 z-20">
          <button
            onClick={goPrev}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 disabled:opacity-20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-foreground/40">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={goNext}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-card/60 backdrop-blur-md border border-border/30 disabled:opacity-20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
