import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import Background from "@/components/Background";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const frame = "mx-auto max-w-[1180px] px-6 md:px-10";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <div className="grade-hero text-paper">
        <div className={frame}>
          <SiteHeader />
          <Hero />
        </div>
        <div className="grade-rule" aria-hidden="true" />
      </div>
      <main id="main">
        <div className={frame}>
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
    </>
  );
}
