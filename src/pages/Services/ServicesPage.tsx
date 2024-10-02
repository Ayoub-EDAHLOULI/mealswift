import ServicesOptions from "@/components/ServicesOptions/ServicesOptions";
import ShortBackground from "@/components/ShortBackground/ShortBackground";
import React from "react";

function ServicesPage() {
  return (
    <>
      <ShortBackground title="Services" background="/images/services.jpg" />
      <ServicesOptions />
    </>
  );
}

export default ServicesPage;
