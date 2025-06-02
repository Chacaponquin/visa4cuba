import IconButton from "../../../../../app/modules/icon/components/IconButton";
import type { IconProps } from "../../../../../app/modules/icon/domain/props";

interface Props {
  onClick(): void;
  disabled: boolean;
  icon: (props: IconProps) => React.ReactNode;
}

export default function ActionButton({ onClick, disabled, icon }: Props) {
  return <IconButton icon={icon} onClick={onClick} disabled={disabled} />;
}
