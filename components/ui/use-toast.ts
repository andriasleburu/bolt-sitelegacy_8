import { toast } from "sonner";

export const useToast = () => {
  return {
    toast,
    dismiss: toast.dismiss,
    error: toast.error,
    success: toast.success,
    loading: toast.loading,
    promise: toast.promise,
    custom: toast.custom,
  };
};