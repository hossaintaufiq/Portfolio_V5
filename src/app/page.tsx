import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsBar from "@/components/MetricsBar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F4F4F0] text-[#111111] overflow-x-clip pt-20 sm:pt-24 lg:pt-24">
      {/* Floating Neo-Brutalist Navbar */}
      <Navbar />

      {/* 00 / Hero Section with Asymmetric Layout & Info Block */}
      <HeroSection />

      {/* Verified Performance Metrics Bar (100+ institutions, 20% latency, 3.83 CGPA, 5.00 GPA) */}
      <MetricsBar />

      {/* 01 / About Section (Editorial & Engineering Philosophies) */}
      <AboutSection />

      {/* 02 / Experience Section (Founder Spotlight & Employment Timeline) */}
      <ExperienceSection />

      {/* 03 / Selected Projects (Dominant Softlligence Cloud + Asymmetric Grid) */}
      <ProjectsSection />

      {/* 04 / Research Section (Multimodal RAG, Multi-Task DL, Stock Forecasting) */}
      <ResearchSection />

      {/* 05 / Skills Section (Categorized Technical Taxonomy) */}
      <SkillsSection />

      {/* 06 / Education, Certifications & Languages */}
      <EducationSection />

      {/* 07 / Contact Section (Let's Build Something Intelligent) */}
      <ContactSection />

      {/* Brutalist Footer */}
      <Footer />
    </main>
  );
}
