import useGetPayment from "./useGetPayment.ts";
import useCreatePayment from "./useCreatePayment.ts";
import useDeletePayment from "./useDeletePayment.ts";
import { useEffect, useState } from "react";
import repositoryContext from "../../context/repositoryContext.ts";

interface usePaymentModelProps {
  id: number;
}

const usePaymentModel = (props: usePaymentModelProps) => {
  const { id } = props;
  const paymentRepository = repositoryContext.injectPaymentRepository();

  const getPayment = useGetPayment({ paymentRepository, id });
  const createPayment = useCreatePayment({ paymentRepository });
  const deletePayment = useDeletePayment({ paymentRepository });

  const [payment, setPayment] = useState<PaymentDto>({
    id: 0,
    status: "",
  } as PaymentDto);

  useEffect(() => {
    getPayment.execute();
  }, []);

  useEffect(() => {
    if (getPayment.payment) {
      setPayment(getPayment.payment);
    }
  }, [id, getPayment.payment]);

  return {
    payment,
    setPayment,
    getPayment,

    createPayment,
    deletePayment,
  };
};

export default usePaymentModel;
