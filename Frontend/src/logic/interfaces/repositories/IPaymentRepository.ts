interface IPaymentRepository {
  getPayment: (id: number) => Promise<PaymentDto>;
  createPayment: (payment: PaymentDto) => Promise<PaymentDto>;
  deletePayment: (id: number) => Promise<PaymentDto>;
}

export default IPaymentRepository;
