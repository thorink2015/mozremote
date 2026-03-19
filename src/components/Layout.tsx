import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CommunitySection } from "@/components/CommunitySection";
import { FinalCTASection } from "@/components/FinalCTASection";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Unique page content goes here */}
      {children}
      
      {/* Shared sections across all pages */}
      <CommunitySection />
      <FinalCTASection />
      
      <Footer />
    </div>
  );
};
