import { Link } from "react-router";
import P from "../../../../../modules/app/modules/ui/components/Markdown/components/P/P";
import SectionContainer from "../../../../../modules/shared/components/Layout/components/SectionContainer/SectionContainer";
import { TranslationRouteBuilder } from "../../../../../modules/app/domain/core/translation-route-builder";
import { APP_ROUTES } from "../../../../../modules/app/domain/constants/app-routes";
import { LanguageContext } from "../../../../../modules/app/modules/language/context/language-context";
import { useContext } from "react";
import Button from "../../../../../modules/app/modules/ui/components/Button/Button";

interface Props {
  description?: string;
  title: string;
  button: string;
  image: { src: string; alt: string };
}

export default function Banner({ title, description, button, image }: Props) {
  const { language } = useContext(LanguageContext);

  return (
    <SectionContainer bg="custom">
      <div className="bg-white rounded-card flex shadow md:px-14 lg:px-20 pl-8 xs:pr-0 pr-8 lg:gap-x-20 md:gap-x-12 gap-x-6">
        <div className="flex flex-col lg:py-20 md:py-14 py-8 max-w-[500px] w-full">
          <h2 className="font-title-semibold text-3xl md:text-4xl mb-4">
            {title}
          </h2>

          {description && <P>{description}</P>}

          <Link
            to={new TranslationRouteBuilder(APP_ROUTES.SHOP).build(language)}
          >
            <Button color="secondary" size="base" className="mt-8">
              {button}
            </Button>
          </Link>
        </div>

        <figure className="w-full hidden xs:block md:translate-x-0 translate-x-4">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </SectionContainer>
  );
}
