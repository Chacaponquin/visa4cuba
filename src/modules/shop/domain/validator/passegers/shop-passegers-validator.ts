import { Validator } from "../../../../app/domain/validator/validator";
import { BirthdateValidator } from "./birthdate-validator";
import { CountryValidator } from "./country-validator";
import { EndValidator } from "./end-validator";
import { LastnameValidator } from "./lastname-validator";
import { NameValidator } from "./name-validator";
import { PassportValidator } from "./passport-validator";
import { StartValidator } from "./start-validator";

interface Props {
  name: string;
  lastname: string;
  country: string | null;
  start: Date | null;
  end: Date | null;
  birthdate: Date | null;
  passport: string;
}

export class ShopPassegersValidator extends Validator {
  constructor({
    birthdate,
    country,
    end,
    lastname,
    name,
    passport,
    start,
  }: Props) {
    super([
      new NameValidator(name),
      new LastnameValidator(lastname),
      new CountryValidator(country),
      new BirthdateValidator(birthdate),
      new PassportValidator(passport),
      new EndValidator(end),
      new StartValidator(start),
    ]);
  }
}
