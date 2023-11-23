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

    public async Task<bool> CancelPayment(int id)
    {
        var payment = await _IPaymentRepo.GetPaymentStatus(id);

        if (payment == null)
        {
            return false;
        }

        return true;
    }

    public async Task<PaymentDto> GetPaymentStatus(int id)
    {
        var payment = await _IPaymentRepo.GetPaymentStatus(id);

        if(payment == null)
        {
            return null;
        }

        return payment;
    }

    public Task<int> ProcessPayment(int id)
    {
        throw new NotImplementedException();
    }
}
