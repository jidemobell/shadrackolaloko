import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Contact />
      <Footer />
    </div>
  );
}
