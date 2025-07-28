import type { TranslationPageProps } from "../../modules/app/domain/core/translation-route";
import useTranslation from "../../modules/app/modules/language/hooks/useTranslation";
import Layout from "../../modules/shared/components/Layout/Layout";

export default function Blog({ builder }: TranslationPageProps) {
  const { DESCRIPTION } = useTranslation({
    DESCRIPTION: {
      es: `Descubre consejos de viaje, novedades sobre visados y guías esenciales para tu viaje a Cuba. El blog de Visa4Cuba te mantiene informado y listo para tu próxima aventura cubana.`,
      en: `Discover travel tips, visa updates, and essential guides for your trip to Cuba. The Visa4Cuba blog keeps you informed and ready for your next Cuban adventure.`,
      it: `Scopri consigli di viaggio, aggiornamenti sui visti e guide essenziali per il tuo viaggio a Cuba. Il blog di Visa4Cuba ti tiene informato e pronto per la tua prossima avventura cubana.`,
    },
  });

  return (
    <Layout
      builder={builder}
      description={DESCRIPTION}
      title="Blog - Visa4Cuba"
    ></Layout>
  );
}
