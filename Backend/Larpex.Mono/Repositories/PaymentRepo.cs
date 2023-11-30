using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories
{
    public class PaymentRepo : IPaymentRepo
    {
        private readonly LarpexDbContext _context;
        private readonly IMapper _mapper;

        public PaymentRepo(
            LarpexDbContext context,
            IMapper mapper
            )
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<int> ChangePaymentStatus(string id)
        {
            var payment = await _context.TblPayments.FirstOrDefaultAsync(p => p.PaymentId.Equals(id));

            if (payment == null)
            {
                return -1;
            }

            bool changedStatus = !payment.PaymentAccepted;
            payment.PaymentAccepted = changedStatus;
            await _context.SaveChangesAsync();

            return 0;
        }

        public async Task<bool> DeletePayment(string id)
        {
            var payment = await _context.TblPayments.FirstOrDefaultAsync(p => p.PaymentId.Equals(id));

            if (payment == null)
            {
                return false;
            }

            _context.TblPayments.Remove(payment);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<PaymentDto> GetPaymentStatus(string id)
        {
            var payment = await _context.TblPayments.FirstOrDefaultAsync(p => p.PaymentId.Equals(id));

            if (payment == null)
            {
                return null;
            }

            return new PaymentDto { Id = payment.PaymentId, Status = payment.PaymentAccepted };
        }

        public async Task<PaymentDto> SavePayment(string id)
        {
            var payment = await _context.TblPayments.FirstOrDefaultAsync(p => p.PaymentId.Equals(id));

            if(payment != null)
            {
                return null;
            }

            return null;
        }
    }
}
