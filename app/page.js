import Achievements from "@/components/home/Achievements";
import Bio from "@/components/home/Bio";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <div className="min-h-[100vh] bg-hero-pattern bg-[50%_0] lg:bg-center">
        <Hero />
      </div>
      <Services />
      <Bio />
      <Achievements />
    </>
  );
}
