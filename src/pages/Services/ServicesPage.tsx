import ServicesFood from "@/components/ServicesFood/ServicesFood";
import ServicesOptions from "@/components/ServicesOptions/ServicesOptions";
import ShortBackground from "@/components/ShortBackground/ShortBackground";

function ServicesPage() {
  return (
    <>
      <ShortBackground title="Services" background="/images/services.jpg" />
      <ServicesOptions />
      <ServicesFood />
    </>
  );
}

export default ServicesPage;
