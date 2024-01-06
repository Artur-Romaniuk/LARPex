using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;
using Stripe.Checkout;
using Stripe;
using Larpex.Mono.Repositories;
using static System.Net.WebRequestMethods;

namespace Larpex.Mono.Services;

public class PaymentService : IPaymentService
{
    private readonly IPaymentRepo _IPaymentRepo;
    public PaymentService(IPaymentRepo paymentRepo)
    {
        _IPaymentRepo = paymentRepo;
    }

    public async Task<bool> CancelPayment(string id)
    {
        var payment = await _IPaymentRepo.GetPaymentStatus(id);

        if (payment == null)
        {
            return false;
        }

        return true;
    }

    public async Task<PaymentDto> GetPaymentStatus(string id)
    {
        var payment = await _IPaymentRepo.GetPaymentStatus(id);

        if(payment == null)
        {
            return null;
        }

        return payment;
    }

    public async Task<Session> Checkout(OrderDto orderDto, string thisApiUrl, string clientUrl)
    {
        EventDto eventToPayFor = await _IPaymentRepo.GetEventToPayFor(orderDto.OrderId.ToString());

        if(eventToPayFor == null)
        {
            return null;
        }

        var options = new SessionCreateOptions
        {           
            SuccessUrl = $"{thisApiUrl}/checkout/success", // Customer paid.
            //CancelUrl = "https://localhost:7226/" + "failed",
            CancelUrl = clientUrl + "failed",  // Checkout cancelled.
            PaymentMethodTypes = new List<string>
            {
                "card"
            },
            LineItems = new List<SessionLineItemOptions>
            {
                new()
                {
                    PriceData = new SessionLineItemPriceDataOptions
                    {
                        UnitAmount = (long) orderDto.OrderAmount * 100,
                        Currency = "PLN",
                        ProductData = new SessionLineItemPriceDataProductDataOptions
                        {
                            Name = eventToPayFor.EventName,
                            Description = eventToPayFor.EventDescription
                        },
                    },
                    Quantity = 1,
                },
            },
            Mode = "payment" 
        };

        var service = new SessionService();
        var session = service.Create(options);

        return session;
    }
}
