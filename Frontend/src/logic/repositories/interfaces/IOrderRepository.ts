interface IOrderRepository {
  getOrderById(id: string): Promise<{
    orderId: number;
    paymentId: number;
    orderAmount: number;
  }>;
}

export default IOrderRepository;
