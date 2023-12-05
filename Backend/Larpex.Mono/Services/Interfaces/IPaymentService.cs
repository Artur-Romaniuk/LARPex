using Larpex.Shared.ModelDto;
using Stripe.Checkout;

namespace Larpex.Mono.Services.Interfaces;

public interface IPaymentService
{
    public Task<bool> CancelPayment(string id);
    public Task<PaymentDto> GetPaymentStatus(string id);
    public Task<Session> Checkout(OrderDto orderDto, string thisApiUrl, string clientUrl);
}
