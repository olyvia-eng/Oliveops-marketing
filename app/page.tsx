import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WorkflowSection from "@/components/sections/WorkflowSection";
import JobCostingSection from "@/components/sections/JobCostingSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemsSection />
      <WorkflowSection />
      <FeaturesSection />
      <JobCostingSection />
      <IndustriesSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
