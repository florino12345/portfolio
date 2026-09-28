import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Store } from "@/components/store";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Services />
        <Store />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
