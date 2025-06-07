import type { ShopOption } from "../../../modules/shop/domain/entities/shop-option";

export interface SectionPassegerForm {
  section: ShopOption;
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
