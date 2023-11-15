using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces
{
    public interface IPaymentRepo
    {
        public Task<int> ChangePaymentStatus(int id);
        public Task<bool> DeletePayment(int id);
        public Task<PaymentDto> GetPaymentStatus(int id);
        public Task<PaymentDto> SavePayment(int id);
    }
}
