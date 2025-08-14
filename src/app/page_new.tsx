import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Contact />
    </div>
  );
}
