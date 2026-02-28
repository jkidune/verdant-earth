import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats"; // 1. Import the new component
import AboutSection from "@/components/AboutSection"; // 1. Import it here
import Initiatives from "@/components/Initiatives"; // 1. Import it here
import Events from "@/components/Events";
import Blog from "@/components/Blog";
import ValueProposition from "@/components/ValueProposition";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Stats /> {/* 2. Place it right below the Hero */}
      <AboutSection /> {/* 2. Place it here */}
      <Initiatives />
      <Events />
      <Blog />
      <ValueProposition />
      <Newsletter />
    </main>
  );
}