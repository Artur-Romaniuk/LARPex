import IOrderRepository from "../interfaces/IOrderRepository.ts";
import axios from "axios";
import { API_HOST } from "../../../config/config.ts";

class OrderRepository implements IOrderRepository {
  getOrderById(
    id: string,
  ): Promise<{ orderId: number; paymentId: number; orderAmount: number }> {
    return axios.get(`${API_HOST}/Order/getOrder?id=${id}`).then((response) => {
      return response.data;
    });
  }
}

export default OrderRepository;
