import { Menu, Home, Grid3x3, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SideMenu } from "@/components/SideMenu";

export const Navigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-background/80 border-b border-border/30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center">
          {/* Left: Hamburger Menu */}
          <SideMenu 
            trigger={
              <button className="p-2 hover:bg-white/10 rounded-[7px] transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            }
          />

          {/* Center: Logo (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <Building2 className="w-7 h-7 text-primary" />
          </div>

          {/* Right: Logo on mobile, Buttons on desktop */}
          <div className="ml-auto flex items-center gap-3">
            <Building2 className="md:hidden w-6 h-6 text-primary" />
            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex text-sm rounded-[7px]">
                Войти
              </Button>
            </a>
            <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2 rounded-[7px]">
                Подать Заявку
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-2xl bg-background/95 border-t border-border/30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-around h-20 px-2">
          <a href="/" className="flex flex-col items-center gap-1 p-3 text-foreground/60 hover:text-primary transition-all active:scale-95">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Главная</span>
          </a>
          <button className="flex flex-col items-center gap-1 p-3 text-foreground/60 hover:text-primary transition-all active:scale-95">
            <Grid3x3 className="w-6 h-6" />
            <span className="text-xs font-medium">Сервисы</span>
          </button>
          <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center gap-1 p-3 text-primary transition-all active:scale-95">
            <div className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(179,158,138,0.8)]" />
            <div className="relative">
              <FileText className="w-6 h-6" />
              <div className="absolute inset-0 blur-md bg-primary/30 -z-10" />
            </div>
            <span className="text-xs font-medium">Подать заявку</span>
          </a>
        </div>
      </nav>
    </>
  );
};
