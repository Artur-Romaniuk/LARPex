using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Stripe.Checkout;

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
        [ProducesResponseType(typeof(StripeRequestDto), StatusCodes.Status201Created)]
        public async Task<ActionResult<StripeRequestDto>> ProcessPayment()
        {
            // tymczasowo bo nie ma Order zaimplementowanego
            var domain = Request.Scheme + "://" + Request.Host.Value + "/";
            StripeRequestDto stripeRequestDto = new()
            {
                ApprovedUrl = domain + "utworz-wydarzenie", // to do: zmienic
                CancelUrl = domain + "panel-wydarzen"
            };

            try
            {
                var options = new SessionCreateOptions
                {
                    SuccessUrl = stripeRequestDto.ApprovedUrl,
                    CancelUrl = stripeRequestDto.CancelUrl,
                    LineItems = new List<SessionLineItemOptions>(),
                    Mode = "payment",
                };

                var sessionTemporaryItem = new SessionLineItemOptions
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        UnitAmount = 20,
                        Currency = "PLN",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = "Payment for event"
                        }
                    },
                    Quantity = 1
                };

                var service = new SessionService();
                Session session = service.Create(options);

                Response.Headers.Add("Location", session.Url);
            }
            catch (Exception ex)
            {

            }

            return stripeRequestDto;
        }


    }
}
