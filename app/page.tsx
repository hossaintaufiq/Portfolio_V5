import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Skills = dynamic(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Research = dynamic(() =>
  import("@/components/sections/Research").then((m) => ({ default: m.Research })),
);
const Education = dynamic(() =>
  import("@/components/sections/Education").then((m) => ({ default: m.Education })),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
