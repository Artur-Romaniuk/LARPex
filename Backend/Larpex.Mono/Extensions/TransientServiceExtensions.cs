using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Mono.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Larpex.Mono.Extensions;

public static class TransientServiceExtensions
{
    public static void AddTransients(this IServiceCollection services)
    {
        services.AddTransient<IEventsRepo, EventsRepo>();

        services.AddTransient<IPaymentService, PaymentService>();
    }
}