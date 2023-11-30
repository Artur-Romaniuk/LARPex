using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces
{
    public interface IPaymentRepo
    {
        public Task<int> ChangePaymentStatus(string id);
        public Task<bool> DeletePayment(string id);
        public Task<PaymentDto> GetPaymentStatus(string id);
        public Task<PaymentDto> SavePayment(string id);
    }
}
