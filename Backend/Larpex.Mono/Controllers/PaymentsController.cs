using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentService _paymentService;

        public PaymentsController(
            IPaymentService paymentService
            )
        {
            _paymentService = paymentService;
        }

        [HttpDelete]
        [ProducesResponseType(typeof(bool), StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<bool>> CancelPayment(string id)
        {
            var success = await _paymentService.CancelPayment(id);
            if (!success)
            {
                return BadRequest($"Could not delete payment with id {id}");
            }
            return NoContent();
        }

        [HttpGet]
        [ProducesResponseType(typeof(PaymentDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<PaymentDto>> GetPaymentStatus(string id)
        {
            var payment = await _paymentService.GetPaymentStatus(id);
            if (payment != null)
            {
                return BadRequest($"No such payment with id {id}");
            }
            return Ok(payment);
        }


        [HttpPost]
        [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
        public async Task<ActionResult<int>> ProcessPayment(PaymentDto newPayment)
        {
            var payment = await _paymentService.ProcessPayment(newPayment.Id);
            if (payment != null)
            {
                return BadRequest($"Couldn't process the payment");
            }

            return Ok(payment);
        }
    }
}
