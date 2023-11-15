using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services;

public class PaymentService : IPaymentService
{
    public Task<bool> CancelPayment(int id)
    {
        throw new NotImplementedException();
    }

    public Task<PaymentDto> GetPaymentStatus(int id)
    {
        throw new NotImplementedException();
    }

    public Task<int> ProcessPayment()
    {
        throw new NotImplementedException();
    }
}
