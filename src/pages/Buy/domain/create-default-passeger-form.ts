import type { PassegerForm } from "./passeger-form";

export function createDefaultPassegerForm(): PassegerForm {
  return {
    birthdate: null,
    country: null,
    end: null,
    lastname: "",
    name: "",
    passport: "",
    start: null,
  };
}
