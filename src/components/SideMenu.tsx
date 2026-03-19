import { Building2, Shield, Zap, Users, BarChart, Target, FileText, LifeBuoy, TrendingUp, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SideMenuProps {
  trigger: React.ReactNode;
}

export const SideMenu = ({ trigger }: SideMenuProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const services = [
    { icon: Shield, name: "Deal Shield", path: "/deal-shield" },
    { icon: Zap, name: "Term-Sheet Sprint", path: "/term-sheet-sprint" },
    { icon: Users, name: "Manager Triangulation", path: "/manager-triangulation" },
    { icon: BarChart, name: "Underwriting Wall", path: "/underwriting-wall" },
    { icon: Target, name: "Negative Screening", path: "/negative-screening" },
    { icon: FileText, name: "Negotiation Syndicate", path: "/negotiation-syndicate" },
    { icon: LifeBuoy, name: "Investor SOS", path: "/investor-sos" },
    { icon: TrendingUp, name: "Exit Simulator", path: "/exit-simulator" },
    { icon: Calculator, name: "ROI Калькулятор", path: "/roi-calculator" }
  ];
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] flex flex-col">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mb-8 pb-6 border-b border-border/30 hover:opacity-80 transition-opacity">
          <Building2 className="w-8 h-8 text-primary flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-headline text-lg leading-tight">Property Invest Labs</span>
            <span className="text-xs text-foreground/60 leading-tight">Community</span>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex-1 space-y-1">
          <Link 
            to="/" 
            className={`block px-4 py-3 rounded-[7px] transition-colors font-medium ${
              currentPath === "/" ? "bg-primary/20 text-primary" : "hover:bg-primary/10"
            }`}
          >
            Главная
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services" className="border-none">
              <AccordionTrigger className="px-4 py-3 rounded-[7px] hover:bg-primary/10 transition-colors font-medium hover:no-underline">
                8 Сервисов
              </AccordionTrigger>
              <AccordionContent className="pb-0 pt-2">
                <div className="space-y-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-[7px] transition-colors ${
                          currentPath === service.path 
                            ? "bg-primary/20 text-primary" 
                            : "hover:bg-primary/10"
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <a href="mailto:iulia@propertyinvestlabs.com" className="block px-4 py-3 rounded-[7px] hover:bg-primary/10 transition-colors font-medium">
            Поддержка
          </a>
        </nav>
        
        {/* CTA Buttons */}
        <div className="border-t border-border/30 pt-6">
          <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
            <Button className="w-full mb-2">
              Присоединиться
            </Button>
          </a>
          <a href="https://www.skool.com/edeluxe-8040/about" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="w-full">
              Войти
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
