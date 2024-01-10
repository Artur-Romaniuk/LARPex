interface StripeRequestDto {
  stripeSessionUrl: string;
  stripeSessionId: string;
  approvedUrl: string;
  cancelUrl: string;
  orderDto: {
    orderId: string;
    orderAmount: number;
    eventId: number;
  };
}

export default StripeRequestDto;
