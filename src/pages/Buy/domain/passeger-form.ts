import type { IconProps } from "../../../modules/app/modules/icon/domain/props";

export interface SectionPassegerForm {
  section: {
    title: string;
    icon: (props: IconProps) => React.ReactNode;
    id: string;
  };
  passegers: PassegerForm[];
}

export interface PassegerForm {
  name: string;
  lastname: string;
  country: string | null;
  start: Date | null;
  end: Date | null;
  birthdate: Date | null;
  passport: string;
}
