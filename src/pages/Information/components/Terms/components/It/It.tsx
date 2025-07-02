import type { TranslationRouteBuilder } from "../../../../../../modules/app/domain/core/translation-route-builder";
import Layout from "../../../../../../modules/shared/components/Layout/Layout";
import InformationContent from "../../../../shared/components/InformationContent/InformationContent";
import InformationHeader from "../../../../shared/components/InformationHeader/InformationHeader";

interface Props {
  builder: TranslationRouteBuilder;
}

export default function It({ builder }: Props) {
  return (
    <Layout builder={builder}>
      <InformationHeader title="Términos y condiciones"></InformationHeader>

      <InformationContent></InformationContent>
    </Layout>
  );
}
