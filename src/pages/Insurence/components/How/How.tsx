import useTranslation from "../../../../modules/app/modules/language/hooks/useTranslation";
import P from "../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import HowCard from "../../../../modules/shared/components/HowCard/HowCard";
import HowContainer from "../../../../modules/shared/components/HowContainer/HowContainer";

export default function How() {
  const {
    TITLE,
    DESCRIPTION,
    INFO_1_TITLE,
    INFO_1_DESCRIPTION,
    INFO_2_TITLE,
    INFO_2_DESCRIPTION,
    INFO_3_TITLE,
    INFO_3_DESCRIPTION,
    INFO_4_TITLE,
    INFO_4_DESCRIPTION,
  } = useTranslation({
    TITLE: {
      en: "¿Cómo obtener visa y seguro para Cuba en línea?",
      es: "¿Cómo obtener visa y seguro para Cuba en línea?",
      it: "Come ottenere il visto e l'assicurazione per Cuba online?",
    },
    DESCRIPTION: {
      es: "Aquí están nuestras sugerencias",
      en: "Here are our suggestions",
      it: "Ecco i nostri suggerimenti",
    },
    INFO_1_TITLE: {
      es: "Traiga medicamentos esenciales con usted",
      en: "Bring essential medications with you",
      it: "Porta con te i farmaci essenziali",
    },
    INFO_1_DESCRIPTION: {
      es: "Llevar contigo medicamentos esenciales y todos los que necesite para el uso diario (como insulina para diabéticos), porque las farmacias cubanas no siempre están bien surtidas.",
      en: "Bring essential medications and any you need for daily use (like insulin for diabetics), as Cuban pharmacies are not always well-stocked.",
      it: "Porta con te i farmaci essenziali e quelli di cui hai bisogno per l'uso quotidiano (come l'insulina per i diabetici), poiché le farmacie cubane non sono sempre ben fornite.",
    },
    INFO_2_TITLE: {
      es: "Presta atención a la fuente de alimentación",
      en: "Pay attention to the power source",
      it: "Fai attenzione alla fonte di alimentazione",
    },
    INFO_2_DESCRIPTION: {
      es: "No beba agua del grifo, evite comer frutas y verduras crudas y también preste atención al hielo en los cócteles: ¡con toda probabilidad te salvará del dolor de estómago!",
      en: "Do not drink tap water, avoid eating raw fruits and vegetables, and also pay attention to ice in cocktails: it will most likely save you from stomach pain!",
      it: "Non bere acqua del rubinetto, evita di mangiare frutta e verdura crude e fai attenzione al ghiaccio nei cocktail: ti salverà probabilmente da dolori di stomaco!",
    },
    INFO_3_TITLE: {
      es: "Protégete de los mosquitos",
      en: "Protect yourself from mosquitoes",
      it: "Proteggiti dalle zanzare",
    },
    INFO_3_DESCRIPTION: {
      es: "Use aerosoles o lociones contra los mosquitos.",
      en: "Use mosquito sprays or lotions.",
      it: "Usa spray o lozioni contro le zanzare.",
    },
    INFO_4_TITLE: {
      es: "Presta atención al clima",
      en: "Pay attention to the weather",
      it: "Fai attenzione al meteo",
    },
    INFO_4_DESCRIPTION: {
      es: "Esté atento al clima: en Cuba el clima es tropical, y no son infrecuentes las lluvias, los fuertes vientos y los huracanes. Tenga especial cuidado al conducir y, en caso de un evento meteorológico particularmente violento, siga estrictamente las instrucciones de las autoridades locales.",
      en: "Pay attention to the weather: in Cuba, the climate is tropical, and rain, strong winds, and hurricanes are not uncommon. Be especially careful when driving, and in the event of particularly severe weather, strictly follow the instructions of local authorities.",
      it: "Fai attenzione al meteo: a Cuba il clima è tropicale e piogge, forti venti e uragani non sono infrequenti. Fai particolare attenzione alla guida e, in caso di eventi meteorologici particolarmente violenti, segui rigorosamente le istruzioni delle autorità locali.",
    },
  });

  return (
    <LayoutSection bg="blue" title={TITLE} description={DESCRIPTION}>
      <HowContainer>
        <HowCard title={INFO_1_TITLE}>
          <P>{INFO_1_DESCRIPTION}</P>
        </HowCard>

        <HowCard title={INFO_2_TITLE}>
          <P>{INFO_2_DESCRIPTION}</P>
        </HowCard>

        <HowCard title={INFO_3_TITLE}>
          <P>{INFO_3_DESCRIPTION}</P>
        </HowCard>

        <HowCard title={INFO_4_TITLE}>
          <P>{INFO_4_DESCRIPTION}</P>
        </HowCard>
      </HowContainer>
    </LayoutSection>
  );
}
