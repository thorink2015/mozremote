import { PanelLeftClose, PanelLeft } from "lucide-react";

interface SlidesSidebarProps {
  slides: { id: number; title: string }[];
  currentSlide: number;
  onSlideSelect: (index: number) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const SlidesSidebar = ({
  slides,
  currentSlide,
  onSlideSelect,
  isOpen,
  onToggle,
}: SlidesSidebarProps) => {
  return (
    <div className="hidden md:flex flex-col h-screen relative">
      {/* Sidebar Content */}
      <div
        className={`h-full bg-card/40 backdrop-blur-xl border-r border-border/30 flex flex-col transition-all duration-300 ${
          isOpen ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        {/* Logo */}
        <div className="px-5 py-6 border-b border-border/30">
          <h1 className="font-headline text-lg text-primary leading-tight">MOZ</h1>
          <p className="text-xs text-foreground/50 mt-1">Remote Solutions</p>
        </div>

        {/* Slide List */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => onSlideSelect(slide.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all mb-0.5 ${
                currentSlide === slide.id
                  ? "bg-primary/20 text-primary font-medium"
                  : "text-foreground/60 hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <span className="text-xs text-foreground/30 mr-2">
                {String(slide.id + 1).padStart(2, "0")}
              </span>
              {slide.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute top-5 -right-10 p-2 rounded-r-lg bg-card/60 backdrop-blur-md border border-l-0 border-border/30 hover:bg-primary/10 transition-colors z-10"
      >
        {isOpen ? (
          <PanelLeftClose className="w-4 h-4 text-foreground/60" />
        ) : (
          <PanelLeft className="w-4 h-4 text-foreground/60" />
        )}
      </button>
    </div>
  );
};
