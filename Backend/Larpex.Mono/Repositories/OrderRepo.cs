using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;
  
namespace Larpex.Mono.Repositories
{
    public class OrderRepo : IOrderRepo
    {
        private readonly LarpexDbContext _context;
        private readonly IMapper _mapper;

        public OrderRepo(
            LarpexDbContext context,
            IMapper mapper
            )
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<OrderDto> getOrder(string id)
        {
            var response = await _context.TblOrders.FirstOrDefaultAsync(o => o.OrderId.Equals(id));
            if (response != null) {
                return new OrderDto
                {
                    OrderId = response.OrderId,
                    PaymentId = response.PaymentId,
                    OrderAmount = response.OrderAmount,
                };
                }
            else
                return null;
        }       
    }
}
