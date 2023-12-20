using AutoMapper;
using Larpex.Mono.Models;
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
        services.AddTransient<IParticipantsRepo, ParticipantsRepo>();
        services.AddTransient<IParticipantService, ParticipantService>();
        services.AddTransient<IGamesRepo, GamesRepo>();
        services.AddTransient<IGameService, GameService>();
        services.AddTransient<IPaymentRepo, PaymentRepo>();
        services.AddTransient<IPaymentService, PaymentService>();
        services.AddTransient<IUserRepo, UserRepo>();
        services.AddTransient<IOrderRepo, OrderRepo>();
        services.AddTransient<ITimeslotRepo, TimeslotRepo>();
        services.AddTransient<ILocationRepo, LocationRepo>();
        services.AddTransient<IImageRepo, ImageRepo>();
        services.AddTransient<ICharacterService, CharacterService>();
        services.AddTransient<ICharacterRepo, CharacterRepo>();
    }
    public static void AddSigleton(this IServiceCollection services)
    {
        var mapperConfig = new MapperConfiguration(mc =>
        {
            mc.AddProfile(new AutoMapperProfile());
        });

        IMapper mapper = mapperConfig.CreateMapper();
        services.AddSingleton(mapper);
    }
}