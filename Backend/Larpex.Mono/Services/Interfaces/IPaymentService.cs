using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services.Interfaces;

public interface IPaymentService
{
    public Task<bool> CancelPayment(string id);
    public Task<PaymentDto> GetPaymentStatus(string id);
    public Task<int> ProcessPayment(string id);
}
