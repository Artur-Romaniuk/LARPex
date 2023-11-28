using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services.Interfaces;

public interface IPaymentService
{
    public Task<bool> CancelPayment(int id);
    public Task<PaymentDto> GetPaymentStatus(int id);
    public Task<int> ProcessPayment(int id);
}
