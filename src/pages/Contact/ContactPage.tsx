import HeroContent from "@/components/HeroContent/HeroContent";
import "./ContactPage.scss";

function ContactPage() {
  return (
    <section>
      <HeroContent
        title="Contact Us"
        subtitle="We are here to help you"
        backgroundImage="/images/hero_contact.jpg"
      />
    </section>
  );
}

export default ContactPage;
