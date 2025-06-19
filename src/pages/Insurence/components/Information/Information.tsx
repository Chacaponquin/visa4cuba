import { APP_IMAGES } from "../../../../modules/app/domain/constants/app-images";
import P from "../../../../modules/app/modules/ui/components/P/P";
import ImageInfoCard from "../../../../modules/shared/components/ImageInfoCard/ImageInfoCard";
import LayoutSection from "../../../../modules/shared/components/Layout/components/LayoutSection/LayoutSection";

export default function Information() {
  return (
    <LayoutSection
      title="Viajes con tranquilidad con seguro médico para Cuba"
      description="Sol, mar caribe, hermosas playas, deliciosos mojitos y ritmo de rumba y salsa: un viaje a Cuba es un verdadero sueño."
    >
      <ImageInfoCard image={APP_IMAGES.BEACH} title="Seguro médico en linea">
        <P>
          El seguro para Cuba no es solo una formalidad: aunque el país es
          seguro, siempre puede haber riesgos para la salud. Entre los más
          comunes, además de posibles accidentes como en cualquier otro lugar
          del mundo, se encuentran los virus gastrointestinales leves o virus
          más graves como el Zika o Dengue, hasta casos raros de infecciones
          como el cólera. Además, un riesgo que no debe subestimarse es la
          posibilidad de ciclones en los meses de junio a noviembre. Si a esto
          le sumamos el hecho de que los costos de hospitalizaciones y
          operaciones son bastante altos y los medicamentos pueden escasear
          debido al embargo, es claro que antes de partir es conveniente
          protegerse.
        </P>
      </ImageInfoCard>

      <ImageInfoCard
        reverse
        image={APP_IMAGES.DOCTOR}
        title="Fácil de contratar"
      >
        <P>
          En particular, YOUR CUBA es el agente oficial de la aseguradora cubana
          ESICUBA con un contrato regular para la venta de seguros de viaje en
          Cuba.
        </P>

        <P>
          La gran ventaja de la póliza ESICUBA y la diferencia sustancial con el
          resto de seguros es que en caso de necesitar asistencia medica NO
          tendrá que adelantar dinero: solo llame al centro de seguros o al
          equipo de YOUR CUBA y el gobierno cubano pagará directamente. Con las
          otras pólizas, en cambio, para recibir asistencia es necesario llamar
          a su país para abrir el reclamo y anticipar los costos. En resumen,
          ¡queremos que te vayas de forma segura!
        </P>
      </ImageInfoCard>

      <ImageInfoCard image={APP_IMAGES.CUBA_4} title="Visa y seguro para Cuba">
        <P>
          A través de YOUR CUBA puede obtener fácilmente su seguro medico para
          Cuba en línea, pagando de forma segura con la mayoría de las tarjetas
          de crédito internacionales. El costo del seguro médico para Cuba es
          flexible y se puede personalizar según las necesidades de cada
          viajero: compruébalo ahora a través de nuestro portal. No solo eso:
          YOUR CUBA también te permite agilizar tus trámites previos a la salida
          comprando una visa y un seguro para Cuba al mismo tiempo. Al igual que
          el seguro, la visa para Cuba (VISA o "tarjeta de turista") es
          obligatoria y debe ser mostrada abordando el vuelo a la isla. A su
          llegada, será sellado por las autoridades aduaneras. Tiene una validez
          de 30 días con posibilidad de ampliación a 60 y comprándolo online a
          través de nuestro portal podrás recibirlo directamente en tu domicilio
          en 48 horas, evitando largas colas en las oficinas y ahorrando costes.
        </P>
      </ImageInfoCard>
    </LayoutSection>
  );
}
