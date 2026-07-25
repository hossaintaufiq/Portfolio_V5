import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Marquee } from "@/components/ui/Marquee";

const WhatIBuild = dynamic(() =>
  import("@/components/sections/WhatIBuild").then((m) => ({ default: m.WhatIBuild })),
);
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Skills = dynamic(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Philosophy = dynamic(() =>
  import("@/components/sections/Philosophy").then((m) => ({ default: m.Philosophy })),
);
const SystemDesign = dynamic(() =>
  import("@/components/sections/SystemDesign").then((m) => ({ default: m.SystemDesign })),
);
const Research = dynamic(() =>
  import("@/components/sections/Research").then((m) => ({ default: m.Research })),
);
const Education = dynamic(() =>
  import("@/components/sections/Education").then((m) => ({ default: m.Education })),
);
const Achievements = dynamic(() =>
  import("@/components/sections/Achievements").then((m) => ({ default: m.Achievements })),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);

const MARQUEE_A = [
  "Full-Stack Engineering",
  "Backend Systems",
  "Enterprise SaaS",
  "AI Applications",
  "System Architecture",
  "Production Delivery",
  "Technical Leadership",
  "Research to Product",
];

const MARQUEE_B = [
  "Next.js",
  "Node.js",
  "Express",
  "TypeScript",
  "Python",
  "Java",
  "Kotlin",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "AWS",
  "RAG Systems",
  "Docker",
  "React",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <Marquee items={MARQUEE_A} speed={32} />
        <About />
        <WhatIBuild />
        <Marquee items={MARQUEE_B} speed={28} reverse />
        <Projects />
        <Experience />
        <Skills />
        <Philosophy />
        <SystemDesign />
        <Research />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
