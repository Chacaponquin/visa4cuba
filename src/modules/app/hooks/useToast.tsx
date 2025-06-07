import { toast } from "react-toastify";
import type { FormException } from "../domain/exceptions/form";

interface ToastProps {
  message: string;
  id?: string;
}

export default function useToast() {
  function errors(err: FormException[]) {
    for (let i = 0; i < err.length; i++) {
      const e = err[i];

      error({ message: e.message });
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
