import IPaymentRepository from "../../repositories/interfaces/IPaymentRepository.ts";
import { useMutation } from "react-query";

interface useDeletePaymentProps {
  paymentRepository: IPaymentRepository;
}

const useDeletePayment = (props: useDeletePaymentProps) => {
  const { paymentRepository } = props;

  const {
    mutate: deletePayment,
    isError,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: (id: number) => paymentRepository.deletePayment(id),
  });

  return {
    deletePayment,
    loadings: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useDeletePayment;
