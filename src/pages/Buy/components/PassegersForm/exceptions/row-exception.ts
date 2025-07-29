import { FormException } from "../../../../../modules/app/domain/exceptions/form";

export class RowException extends FormException {
  constructor(row: number, error: string) {
    super({
      es: `En el pasajero ${row}. ${error}`,
      en: `In passenger ${row}. ${error}`,
      it: `Nel passeggero ${row}. ${error}`,
    });
  }
}
