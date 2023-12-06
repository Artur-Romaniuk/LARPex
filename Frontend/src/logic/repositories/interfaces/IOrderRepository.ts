interface IOrderRepository {
  getOrderById(id: number): Promise<{
    orderId: number;
    paymentId: number;
    orderAmount: number;
  }>;
}

export default IOrderRepository;
