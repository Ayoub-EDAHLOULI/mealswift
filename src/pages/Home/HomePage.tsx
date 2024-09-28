import Hero from "@/components/Hero/Hero";
import HowWork from "@/components/HowWork/HowWork";
import Navbar from "@/components/Navbar/Navbar";
import Restaurant from "@/components/Restaurant/Restaurant";

function HomePage() {
  return (
    <section>
      <Navbar />
      <Hero />
      <HowWork />
      <Restaurant />
    </section>
  );
}

export default HomePage;
