import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import Card from "./components/Card/Card";
import { WHY_CARDS } from "./domain/why-card";

export default function Why() {
  return (
    <LayoutSection
      title="¿Por qué elegir Visa4Cuba?"
      description="Somos más que una agencia de viajes, somos tus compañeros de aventura"
    >
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-8 mt-5">
        {WHY_CARDS.map((w, i) => (
          <Card key={i} card={w} />
        ))}
      </div>
    </LayoutSection>
  );
}
