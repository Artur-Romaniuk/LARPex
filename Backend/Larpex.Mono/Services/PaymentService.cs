using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services;

public class PaymentService : IPaymentService
{
    private readonly IPaymentRepo _IPaymentRepo;
    public PaymentService(IPaymentRepo paymentRepo)
    {
        _IPaymentRepo = paymentRepo;
    }

    public async Task<bool> CancelPayment(string id)
    {
        var payment = await _IPaymentRepo.GetPaymentStatus(id);

        if (payment == null)
        {
            return false;
        }

        return true;
    }

    public async Task<PaymentDto> GetPaymentStatus(string id)
    {
        var payment = await _IPaymentRepo.GetPaymentStatus(id);

        if(payment == null)
        {
            return null;
        }

        return payment;
    }

    public Task<int> ProcessPayment(string id)
    {
        throw new NotImplementedException();
    }
}
