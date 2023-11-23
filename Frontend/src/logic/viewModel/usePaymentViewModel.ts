import usePaymentModel from "../model/usePaymentModel";

interface usePaymentViewModelProps {
  id: number;
}

const usePaymentViewModel = (props: usePaymentViewModelProps) => {
  const paymentModel = usePaymentModel(props);

  const handleChangePayment = (name: string, value: string) => {
    paymentModel.setPayment({
      ...paymentModel.payment,
      [name]: value,
    });
  };

  const createPayment = () => {
    paymentModel.createPayment.createPayment(paymentModel.payment);
  };

  const deletePayment = () => {
    paymentModel.deletePayment.deletePayment(paymentModel.payment.id);
  };

  return {
    payment: paymentModel.payment,
    handleChangePayment,
    paymentLoading: paymentModel.getPayment.loadings,

    createPayment: createPayment,
    createPaymentLoading: paymentModel.createPayment.loadings,

    deletePayment: deletePayment,
    deletePaymentLoading: paymentModel.deletePayment.loadings,
  };
};

export default usePaymentViewModel;
