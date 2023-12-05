using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepo _orderRepo;

        public OrderController(
            IOrderRepo orderRepo
            )
        {
            _orderRepo = orderRepo;
        }

        [HttpGet("getOrder")]
        [ProducesResponseType(typeof(IEnumerable<LocationDto>), StatusCodes.Status200OK)]
        public async Task<ActionResult<OrderDto>> GetOrder(string id)
        {
            var order = await _orderRepo.getOrder(id);
            return Ok(order);
        }
    }
}
