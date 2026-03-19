import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import Index from "./pages/Index";
import TermSheetSprint from "./pages/TermSheetSprint";
import ManagerTriangulation from "./pages/ManagerTriangulation";
import UnderwritingWall from "./pages/UnderwritingWall";
import NegativeScreening from "./pages/NegativeScreening";
import NegotiationSyndicate from "./pages/NegotiationSyndicate";
import InvestorSOS from "./pages/InvestorSOS";
import ExitSimulator from "./pages/ExitSimulator";
import ROICalculator from "./pages/ROICalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deal-shield" element={<Index />} />
          <Route path="/term-sheet-sprint" element={<TermSheetSprint />} />
          <Route path="/manager-triangulation" element={<ManagerTriangulation />} />
          <Route path="/underwriting-wall" element={<UnderwritingWall />} />
          <Route path="/negative-screening" element={<NegativeScreening />} />
          <Route path="/negotiation-syndicate" element={<NegotiationSyndicate />} />
          <Route path="/investor-sos" element={<InvestorSOS />} />
          <Route path="/exit-simulator" element={<ExitSimulator />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
