import IPaymentRepository from "../interfaces/IPaymentRepository.ts";
import axios from "axios";
import { API_HOST } from "../../../config/config.ts";
import StripeRequestDto from "../../../entities/StripeRequestDto.ts";
import PaymentDto from "../../../entities/PaymentDto.ts";
import OrderDto from "../../../entities/OrderDto.ts";

class PaymentRepository implements IPaymentRepository {
  createPayment(payment: OrderDto): Promise<StripeRequestDto> {
    return axios
      .post(API_HOST + "/Payments", payment)
      .then((response) => response.data);
  }

  deletePayment(id: number): Promise<boolean> {
    return axios
      .delete(API_HOST + "/Payments?id=" + id)
      .then((response) => response.data);
  }

  getPayment(id: number): Promise<PaymentDto> {
    return axios
      .get(API_HOST + "/Payments?id=" + id)
      .then((response) => response.data);
  }
}

export default PaymentRepository;
