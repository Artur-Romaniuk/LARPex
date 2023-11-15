using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories
{
    public class PaymentRepo : IPaymentRepo
    {
        private readonly LarpexDbContext _context;
        private readonly IMapper _mapper;
        private readonly IPaymentService _paymentService;

        public PaymentRepo(
            LarpexDbContext context,
            IMapper mapper,
            IPaymentService paymentService
            )
        {
            _context = context;
            _mapper = mapper;
            _paymentService = paymentService;
        }

        public Task<int> ChangePaymentStatus(int id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeletePayment(int id)
        {
            throw new NotImplementedException();
        }

        public Task<PaymentDto> GetPaymentStatus(int id)
        {
            throw new NotImplementedException();
        }

        public Task<PaymentDto> SavePayment(int id)
        {
            throw new NotImplementedException();
        }
    }
}
