import { Validator } from "../../../../app/domain/validator/validator";
import { BirthdateValidator } from "./birthdate-validator";
import { CountryValidator } from "./country-validator";
import { EmailValidator } from "./email";
import { LastnameValidator } from "./lastname-validator";
import { NameValidator } from "./name-validator";
import { PhoneValidator } from "./phone-validator";

interface Props {
  name: string;
  lastname: string;
  phone: string;
  country: string | null;
  birthdate: Date | null;
  email: string;
}

export class ShopUserValidator extends Validator {
  constructor({ birthdate, country, lastname, name, phone, email }: Props) {
    super([
      new EmailValidator(email),
      new NameValidator(name),
      new LastnameValidator(lastname),
      new PhoneValidator(phone),
      new CountryValidator(country),
      new BirthdateValidator(birthdate),
    ]);
  }
}
