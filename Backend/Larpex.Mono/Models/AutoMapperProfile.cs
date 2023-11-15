using AutoMapper;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Models;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Event, EventDto>();
        CreateMap<EventDto, Event>();

        CreateMap<Game, GameDto>();
        CreateMap<GameDto, Game>();

        CreateMap<Participant, ParticipantDto>();
        CreateMap<ParticipantDto, Participant>();
    }
}
