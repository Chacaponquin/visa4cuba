import { FormException } from "../../../../../modules/app/domain/exceptions/form";

export class RowException extends FormException {
  constructor(row: number, error: FormException) {
    super(`Para el pasajero ${row}. ${error.message}`);
  }
}
