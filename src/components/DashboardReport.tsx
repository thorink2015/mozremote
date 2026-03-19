import { Card } from "@/components/ui/card";
import { FileText, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const DashboardReport = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden bg-card/40 md:bg-card/50 backdrop-blur-md border-2 border-white/10 rounded-[7px]">
        {/* Header - Document Style */}
        <div className="p-6 border-b border-border/40">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-0.5">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <h2 className="font-grotesk text-base md:text-xl font-bold leading-tight flex-1">DEAL SHIELD AUDIT REPORT</h2>
              </div>
              <div className="space-y-1 text-sm">
                <div>
                  <span className="text-foreground/60">Объект: </span>
                  <span className="font-semibold">Batumi Pearl Tower</span>
                </div>
                <div>
                  <span className="text-foreground/60">Застройщик: </span>
                  <span className="font-semibold">Pearl Development LLC</span>
                </div>
              </div>
            </div>
            <div className="text-left md:text-right text-xs text-foreground/60 font-mono">
              <div className="mb-2">REF: DS-2025-0142</div>
              <div className="mb-2">Date: 15.01.2025</div>
              <Badge className="bg-green-950/30 border border-green-500/40 text-green-400 text-[10px] px-2 py-0.5 hover:bg-green-950/40">
                COMPLETED
              </Badge>
            </div>
          </div>
        </div>

        {/* Audit Results Section */}
        <div className="p-6 space-y-3">
          <h3 className="font-grotesk text-sm font-bold mb-3 text-foreground/70">AUDIT RESULTS</h3>
          
          {/* Green checks */}
          <div className="flex flex-col gap-2 p-3 border border-green-500/30 bg-green-500/5 rounded-[7px]">
            <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-semibold">
              <span>✓</span>
              <span>OK</span>
            </div>
            <div className="font-semibold text-sm">Юридическая чистота</div>
            <div className="text-xs text-foreground/70">Все документы в порядке, право собственности подтверждено</div>
          </div>
          
          <div className="flex flex-col gap-2 p-3 border border-green-500/30 bg-green-500/5 rounded-[7px]">
            <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-semibold">
              <span>✓</span>
              <span>OK</span>
            </div>
            <div className="font-semibold text-sm">Финансы застройщика</div>
            <div className="text-xs text-foreground/70">Стабильное финансовое положение, нет долгов</div>
          </div>
          
          {/* Yellow warning */}
          <div className="flex flex-col gap-2 p-3 border border-yellow-500/30 bg-yellow-950/20 rounded-[7px]">
            <div className="flex items-center gap-1.5 text-yellow-400 text-[10px] font-semibold">
              <span>⚠</span>
              <span>WARNING</span>
            </div>
            <div className="font-semibold text-sm text-yellow-400">РИСК: Задержка сдачи</div>
            <div className="text-xs text-foreground/70">Прогнозируемая задержка 6+ месяцев по объективным причинам</div>
          </div>
          
          {/* Red X */}
          <div className="flex flex-col gap-2 p-3 border border-red-500/30 bg-red-950/30 rounded-[7px]">
            <div className="flex items-center gap-1.5 text-red-400 text-[10px] font-semibold">
              <span>✕</span>
              <span>CRITICAL</span>
            </div>
            <div className="font-semibold text-sm text-red-400">Падение цен в районе</div>
            <div className="text-xs text-foreground/70">Цены упали на 8% за последние 6 месяцев, тренд продолжается</div>
          </div>
        </div>

        {/* Risk Score Bar */}
        <div className="p-6 border-t border-border/40">
          <div className="text-xs font-bold mb-2 text-foreground/70">RISK SCORE</div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full h-3 bg-border/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-600" style={{width: '72%'}} />
              </div>
            </div>
            <span className="text-red-400 font-bold text-base whitespace-nowrap">72%</span>
          </div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-foreground/60">Low Risk</span>
            <span className="text-xs text-foreground/60">High Risk</span>
          </div>
        </div>

        {/* Final Recommendation */}
        <div className="p-6 border-t border-border/40">
          <div className="bg-red-950/30 border-2 border-red-500/40 rounded-[7px] p-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-400 md:hidden" />
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400 hidden md:block" />
                <span className="text-red-400 font-bold text-base md:text-lg">РЕКОМЕНДАЦИЯ: NO GO</span>
              </div>
            </div>
            <div className="text-sm text-foreground/70 mb-3">
              Высокие риски по локации и срокам сдачи. Не рекомендуем инвестировать.
            </div>
            
            {/* Alternatives attached to NO GO card */}
            <div className="pt-3 border-t border-red-500/20">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <span className="text-sm text-foreground">АЛЬТЕРНАТИВЫ:</span>
                  <span className="font-semibold text-sm text-foreground">2 объекта найдено →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Auditors - Outside Card */}
      <div className="text-xs text-center text-foreground/50 font-mono mt-3">
        Audited by: Alex Petrov | Verified by: Maria Ivanova
      </div>
    </div>
  );
};
