interface StripeRequestDto {
  stripeSessionUrl: string;
  stripeSessionId: string;
  approvedUrl: string;
  cancelUrl: string;
}

export default StripeRequestDto;