import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
}

export const ServiceCard = ({ icon: Icon, name }: ServiceCardProps) => {
  return (
    <Card className="p-5 md:p-3 bg-card/40 backdrop-blur-md border border-white/10 rounded-[7px] hover:bg-card/50 transition-all hover:border-primary/40 active:scale-[0.98] group">
      <div className="flex flex-col items-center text-center gap-3 md:flex-row md:text-left md:gap-3">
        <div className="w-14 h-14 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
          <Icon className="w-7 h-7 md:w-5 md:h-5 text-primary" />
        </div>
        <p className="text-base md:text-sm font-body font-medium leading-tight">{name}</p>
      </div>
    </Card>
  );
};
