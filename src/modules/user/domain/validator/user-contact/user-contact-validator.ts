import { Validator } from "../../../../app/domain/validator/validator";
import { UserContactEmailValidator } from "./email";
import { UserContactLastnameValidator } from "./lastname";
import { UserContactMessageValidator } from "./message";
import { UserContactNameValidator } from "./name";
import { UserContactPhoneValidator } from "./phone";

interface Props {
  message: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

export class UserContactValidator extends Validator {
  constructor({ email, lastname, message, name, phone }: Props) {
    super([
      new UserContactNameValidator(name),
      new UserContactLastnameValidator(lastname),
      new UserContactEmailValidator(email),
      new UserContactPhoneValidator(phone),
      new UserContactMessageValidator(message),
    ]);
  }
}
