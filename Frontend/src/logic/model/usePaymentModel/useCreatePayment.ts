import IPaymentRepository from "../../interfaces/repositories/IPaymentRepository.ts";
import { useMutation } from "react-query";

interface useCreatePaymentProps {
  paymentRepository: IPaymentRepository;
}

const useCreatePayment = (props: useCreatePaymentProps) => {
  const { paymentRepository } = props;

  const {
    mutate: createPayment,
    isError,
    isSuccess,
    isLoading,
  } = useMutation({
    mutationFn: (payment: PaymentDto) =>
      paymentRepository.createPayment(payment),
  });

  return {
    createPayment,
    loadings: {
      isError,
      isSuccess,
      isLoading,
    },
  };
};

export default useCreatePayment;
