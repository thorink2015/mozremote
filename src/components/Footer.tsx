import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Logo with gradient lines */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <Building2 className="w-8 h-8 text-primary" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        {/* Menu */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <a href="#" className="md:inline hidden text-foreground/70 hover:text-primary transition-colors">
            Главная
          </a>
          <a href="#" className="md:inline hidden text-foreground/70 hover:text-primary transition-colors">
            Сервисы
          </a>
          <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
            Как работает
          </a>
          <a href="#" className="md:inline hidden text-foreground/70 hover:text-primary transition-colors">
            Цены
          </a>
          <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
            О нас
          </a>
          <a href="mailto:iulia@propertyinvestlabs.com" className="text-foreground/70 hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex justify-center mb-8">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm rounded-[7px]">
            Подать Заявку
          </Button>
        </div>

        {/* Copyright & Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/50 pb-8">
          <p>© 2024 Property Invest Labs. Все права защищены.</p>
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
