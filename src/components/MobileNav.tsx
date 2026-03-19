import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  slides: { id: number; title: string }[];
  currentSlide: number;
  onSlideSelect: (index: number) => void;
}

export const MobileNav = ({ slides, currentSlide, onSlideSelect }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-background/90 backdrop-blur-xl border-b border-border/30">
        <div>
          <span className="font-headline text-base text-primary">MOZ</span>
          <span className="text-xs text-foreground/50 ml-2">Remote Solutions</span>
        </div>
        <button onClick={() => setOpen(!open)} className="p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-14 overflow-y-auto">
          <nav className="p-4 space-y-1">
            {slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => {
                  onSlideSelect(slide.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                  currentSlide === slide.id
                    ? "bg-primary/20 text-primary font-medium"
                    : "text-foreground/60 hover:text-foreground hover:bg-primary/5"
                }`}
              >
                <span className="text-xs text-foreground/30 mr-3">
                  {String(slide.id + 1).padStart(2, "0")}
                </span>
                {slide.title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
