import repositoryContext from "../../repositories/repositoryContext.ts";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const useCreatePayment = () => {
  const paymentRepository = repositoryContext.injectPaymentRepository();
  const navigate = useNavigate();
  const createPayment = useMutation({
    mutationFn: paymentRepository.createPayment,
  });

  return createPayment;
};

export default useCreatePayment;
