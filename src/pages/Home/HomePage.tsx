import Banner from "@/components/Banner/Banner";
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
      <Banner />
    </section>
  );
}

export default HomePage;
