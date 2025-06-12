import AboutSection from "../../shared/components/AboutSection/AboutSection";
import Card from "./components/Card/Card";
import { SERVICE_CARDS } from "./domain/service-card";

export default function Services() {
  return (
    <AboutSection
      title="Experiencias únicas en Cuba"
      description="Ofrecemos una amplia gama de servicios diseñados para hacer de tu viaje a Cuba una experiencia inolvidable y auténtica."
    >
      <div className="flex md:flex-row flex-col items-start gap-x-12 gap-y-7 justify-center">
        {SERVICE_CARDS.map((s, index) => (
          <Card key={index} service={s} />
        ))}
      </div>
    </AboutSection>
  );
}
