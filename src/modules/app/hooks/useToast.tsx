import { toast } from "react-toastify";
import type { FormException } from "../domain/exceptions/form";
import { useContext } from "react";
import { LanguageContext } from "../modules/language/context/language-context";

interface ToastProps {
  message: string;
  id?: string;
}

export default function useToast() {
  const { language } = useContext(LanguageContext);

  function errors(err: FormException[]) {
    for (let i = 0; i < err.length; i++) {
      const e = err[i];

      error({ message: e.getMessage(language) });
    }
  }

  function success({ message, id }: ToastProps) {
    toast.success(message, { toastId: id, autoClose: 5000 });
  }

  function error({ id, message }: ToastProps) {
    toast.error(message, { toastId: id, autoClose: 5000 });
  }

  return { error, errors, success };
}
