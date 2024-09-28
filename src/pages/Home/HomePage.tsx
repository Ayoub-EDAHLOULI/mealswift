import Hero from "@/components/Hero/Hero";
import HowWork from "@/components/HowWork/HowWork";
import Navbar from "@/components/Navbar/Navbar";

function HomePage() {
  return (
    <section>
      <Navbar />
      <Hero />
      <HowWork />
    </section>
  );
}

export default HomePage;
