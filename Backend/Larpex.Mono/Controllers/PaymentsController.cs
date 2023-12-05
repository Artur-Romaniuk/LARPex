using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Stripe;
using Stripe.Checkout;

namespace Larpex.Mono.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly IPaymentService _paymentService;
        private static string s_wasmClientURL = string.Empty;

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
        public async Task<ActionResult<StripeRequestDto>> Checkout([FromBody] OrderDto orderDto, [FromServices] IServiceProvider sp)
        {
            var referer = Request.Headers.Referer;
            s_wasmClientURL = referer[0];

            // Build the URL to which the customer will be redirected after paying.
            var server = sp.GetRequiredService<IServer>();

            var serverAddressesFeature = server.Features.Get<IServerAddressesFeature>();

            string? thisApiUrl = null;

            if (serverAddressesFeature is not null)
            {
                thisApiUrl = serverAddressesFeature.Addresses.FirstOrDefault();
            }

            if (thisApiUrl is not null)
            {
                var session = await _paymentService.Checkout(orderDto, thisApiUrl, s_wasmClientURL);

                var stripeRequestDto = new StripeRequestDto()
                {
                    StripeSessionUrl = session.Url,
                    StripeSessionId = session.Id,
                     ApprovedUrl = session.SuccessUrl,
                     CancelUrl = session.CancelUrl,
                    OrderDto = orderDto,
                };

                return Ok(stripeRequestDto);
            }
            else
            {
                return StatusCode(500);
            }
        }

    }
}
