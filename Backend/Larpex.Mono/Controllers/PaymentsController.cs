using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentRepo _paymentRepo;

        public PaymentsController(
            IPaymentRepo paymentRepo
            )
        {
            _paymentRepo = paymentRepo;
        }

        [HttpDelete]
        [ProducesResponseType(typeof(bool), StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<bool>> CancelPayment(int id)
        {
            var success = await _paymentRepo.DeletePayment(id);
            if (!success)
            {
                return BadRequest($"Could not delete payment with id {id}");
            }
            return NoContent();
        }

        [HttpGet]
        [ProducesResponseType(typeof(PaymentDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<PaymentDto>> GetPaymentStatus(int id)
        {
            var payment = await _paymentRepo.GetPaymentStatus(id);
            if (payment != null)
            {
                return BadRequest($"No such payment with id {id}");
            }
            return Ok(payment.Status);
        }


        [HttpPost]
        [ProducesResponseType(typeof(int), StatusCodes.Status201Created)]
        public async Task<ActionResult<int>> ProcessPayment(PaymentDto newPayment)
        {
            var payment = await _paymentRepo.SavePayment(newPayment.Id);
            if (payment != null)
            {
                return BadRequest($"Couldn't process the payment");
            }

            return Ok(payment.Status);
        }
    }
}
