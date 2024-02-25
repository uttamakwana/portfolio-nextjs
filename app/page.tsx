import { Intro, SectionDivider, About, Projects, Skills, Experience, Contact } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col max-w-[900px] items-center px-4 ml-auto mr-auto">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <Contact />
    </main>
  );
}
