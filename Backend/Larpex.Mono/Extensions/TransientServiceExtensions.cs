using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Larpex.Mono.Extensions;

public static class TransientServiceExtensions
{
    public static void AddTransients(this IServiceCollection services)
    {
        services.AddTransient<IEventsRepo, EventsRepo>();
    }
}