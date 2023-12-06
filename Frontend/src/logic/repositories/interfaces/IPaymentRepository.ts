import PaymentDto from "../../../entities/PaymentDto.ts";
import StripeRequestDto from "../../../entities/StripeRequestDto.ts";

interface IPaymentRepository {
  getPayment: (id: number) => Promise<PaymentDto>;
  createPayment: (payment: StripeRequestDto) => Promise<PaymentDto>;
  deletePayment: (id: number) => Promise<boolean>;
}

export default IPaymentRepository;
