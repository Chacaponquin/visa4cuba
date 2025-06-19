import Bowl from "../../../../modules/app/modules/icon/components/Bowl";
import Medicine from "../../../../modules/app/modules/icon/components/Medicine";
import Rain from "../../../../modules/app/modules/icon/components/Rain";
import Spray from "../../../../modules/app/modules/icon/components/Spray";
import P from "../../../../modules/app/modules/ui/components/P/P";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";
import InfoCard from "../../../Visas/components/How/components/InfoCard/InfoCard";

export default function How() {
  return (
    <LayoutSection
      title="¿Cómo obtener visa y seguro para Cuba en línea?"
      description="Aquí están nuestras sugerencias"
    >
      <InfoCard
        color="primary"
        icon={Medicine}
        title="Traiga medicamentos esenciales con usted"
      >
        <P>
          Llevar contigo medicamentos esenciales y todos los que necesite para
          el uso diario (como insulina para diabéticos), porque las farmacias
          cubanas no siempre están bien surtidas.
        </P>
      </InfoCard>

      <InfoCard
        icon={Bowl}
        color="secondary"
        title="Presta atención a la fuente de alimentación"
      >
        <P>
          No beba agua del grifo, evite comer frutas y verduras crudas y también
          preste atención al hielo en los cócteles: ¡con toda probabilidad te
          salvará del dolor de estómago!
        </P>
      </InfoCard>

      <InfoCard color="primary" icon={Spray} title="Protégete de los mosquitos">
        <P>Use aerosoles o lociones contra los mosquitos.</P>
      </InfoCard>

      <InfoCard color="secondary" icon={Rain} title="Esté atento al clima">
        <P>
          Esté atento al clima: en Cuba el clima es tropical, y no son
          infrecuentes las lluvias, los fuertes vientos y los huracanes. Tenga
          especial cuidado al conducir y, en caso de un evento meteorológico
          particularmente violento, siga estrictamente las instrucciones de las
          autoridades locales.
        </P>
      </InfoCard>
    </LayoutSection>
  );
}
