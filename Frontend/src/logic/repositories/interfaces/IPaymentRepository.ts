import PaymentDto from "../../../entities/PaymentDto.ts";
import StripeRequestDto from "../../../entities/StripeRequestDto.ts";
import OrderDto from "../../../entities/OrderDto.ts";

interface IPaymentRepository {
  getPayment: (id: number) => Promise<PaymentDto>;
  createPayment: (payment: OrderDto) => Promise<StripeRequestDto>;
  deletePayment: (id: number) => Promise<boolean>;
}

export default IPaymentRepository;
