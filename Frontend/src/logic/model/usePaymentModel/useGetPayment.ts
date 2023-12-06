import IPaymentRepository from "../../repositories/interfaces/IPaymentRepository.ts";
import { useQuery } from "react-query";

interface useGetPaymentProps {
  id: number;
  paymentRepository: IPaymentRepository;
}

const useGetPayment = (props: useGetPaymentProps) => {
  const { id, paymentRepository } = props;

  const {
    data: payment,
    refetch: execute,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["payment", id],
    queryFn: () => paymentRepository.getPayment(id),
    enabled: false,
  });

  return {
    payment,
    execute,
    loadings: {
      isError,
      isLoading,
      isSuccess,
    },
  };
};

export default useGetPayment;
