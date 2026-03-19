import { Card } from "@/components/ui/card";
import { Clock, CheckCircle, DollarSign, FileCheck } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  number: string;
  label: string;
  icon: LucideIcon;
}

const iconMap: Record<string, LucideIcon> = {
  "48": Clock,
  "12": CheckCircle,
  "€95K+": DollarSign,
  "100+": FileCheck,
};

export const StatsCard = ({ number, label, icon }: StatsCardProps) => {
  const Icon = icon || iconMap[number] || Clock;
  
  return (
    <Card className="relative overflow-hidden backdrop-blur-xl bg-card/40 md:bg-black/40 border border-white/10 md:border-white/10 p-4 md:p-6 hover:border-primary/20 transition-colors rounded-[7px]">
      {/* Subtle gradient overlay for desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      {/* Mobile: Horizontal layout with icon circle */}
      <div className="relative z-10 flex items-center gap-3 md:hidden">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="text-2xl font-bold font-headline text-primary mb-0.5">
            {number}
          </div>
          <div className="text-xs font-body text-foreground/70">
            {label}
          </div>
        </div>
      </div>
      
      {/* Desktop: Premium layout with icon in rounded square */}
      <div className="hidden md:flex md:flex-col md:items-start relative z-10">
        {/* Icon with glow */}
        <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        {/* Number */}
        <div className="text-4xl font-bold font-headline text-primary mb-1">{number}</div>
        
        {/* Label */}
        <div className="text-xs uppercase tracking-wider font-body text-foreground/60">{label}</div>
      </div>
    </Card>
  );
};
