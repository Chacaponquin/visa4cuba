import type { TranslationRouteBuilder } from "../../../../../../../app/domain/core/translation-route-builder";
import IconButton from "../../../../../../../app/modules/icon/components/IconButton";
import Menu from "../../../../../../../app/modules/icon/components/Menu";
import LanguageOptions from "../../../../shared/components/LanguageOptions/LanguageOptions";

interface Props {
  onOpenAside(): void;
  builder: TranslationRouteBuilder;
  children?: React.ReactNode;
}

export default function Options({ onOpenAside, builder, children }: Props) {
  return (
    <div className="w-full flex gap-x-4 justify-end max-w-[200px]">
      {children}

      <LanguageOptions builder={builder} />

      <div className="lg:hidden flex items-center">
        <IconButton onClick={onOpenAside} icon={Menu} />
      </div>
    </div>
  );
}
