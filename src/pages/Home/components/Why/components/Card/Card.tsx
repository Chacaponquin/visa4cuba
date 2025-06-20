import IconCard from "../../../../../../modules/shared/components/IconCard/IconCard";
import type { WhyCard } from "../../domain/why-card";

interface Props {
  card: WhyCard;
}

export default function Card({ card }: Props) {
  return (
    <article className="flex flex-col items-center text-center">
      <IconCard size="lg" color="primary" icon={card.icon} className="mb-4" />

      <h3 className="text-xl font-title-semibold mb-2">{card.title}</h3>

      <p className="text-sm text-gray-500">{card.description}</p>
    </article>
  );
}
