import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroGlow from "@/components/HeroGlow";
import SideRail from "@/components/SideRail";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ChatGuide from "@/components/ChatGuide";
import CommandPalette from "@/components/CommandPalette";
import Snapshot from "@/components/Snapshot";
import ScrollProgress from "@/components/ScrollProgress";

const frame = "mx-auto max-w-[1180px] px-5 sm:px-6 md:px-10 min-[1700px]:max-w-[1320px]";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <SideRail
        email={PORTFOLIO_DATA.identity.email}
        github={PORTFOLIO_DATA.identity.links.github}
        linkedin={PORTFOLIO_DATA.identity.links.linkedin}
      />
      <div className="grade-hero relative overflow-hidden text-paper">
        <HeroGlow />
        <div className={`${frame} relative`}>
          <SiteHeader />
          <Hero />
        </div>
        <div className="grade-rule" aria-hidden="true" />
      </div>
      <main id="main">
        <div className={frame}>
          <Snapshot />
          <Work />
          <Experience />
          <Research />
          <Skills />
          <Background />
        </div>
        <Contact />
      </main>
      <div className={frame}>
        <Footer />
      </div>
      <ChatGuide />
      <CommandPalette />
    </>
  );
}
