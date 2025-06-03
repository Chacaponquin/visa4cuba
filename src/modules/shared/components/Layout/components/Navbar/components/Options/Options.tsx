import IconButton from "../../../../../../../app/modules/icon/components/IconButton";
import Menu from "../../../../../../../app/modules/icon/components/Menu";

interface Props {
  onOpenAside(): void;
}

export default function Options({ onOpenAside }: Props) {
  return (
    <div className="w-full flex justify-end max-w-[200px]">
      <div className="lg:hidden block">
        <IconButton onClick={onOpenAside} icon={Menu} />
      </div>
    </div>
  );
}
