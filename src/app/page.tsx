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
      <ScrollProgress />
      <div className="bg-ink text-paper">
        <div className={frame}>
          <SiteHeader />
          <Hero />
        </div>
      </div>
      <main>
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
