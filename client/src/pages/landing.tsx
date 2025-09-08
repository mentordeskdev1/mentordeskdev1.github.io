import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import PromotionBanner from "@/components/promotion-banner";
import BookingWidget from "@/components/booking-widget";
import DomainsSection from "@/components/domains-section";
import PricingSection from "@/components/pricing-section";
import PlanSection from "@/components/plan-section";
import WorkflowSection from "@/components/workflow-section";
import TestimonialsSection from "@/components/testimonials-section";
import ExpertsSection from "@/components/experts-section";
import InterviewerJoinSection from "@/components/interviewer-join-section";
import LeaderboardSection from "@/components/leaderboard-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <PromotionBanner />
      {/* <BookingWidget /> */}
      {/* <DomainsSection /> */}
      <PlanSection />
      {/* <PricingSection /> */}
      {/* <LeaderboardSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <WorkflowSection /> */}
      {/* <ExpertsSection /> */}
      {/* <InterviewerJoinSection /> */}
      {/* <FAQSection /> */}

      <Footer />
    </div>
  );
}
