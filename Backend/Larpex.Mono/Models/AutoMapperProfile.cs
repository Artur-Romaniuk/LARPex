using AutoMapper;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Models;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<TblEvent, EventDto>();
        CreateMap<EventDto, TblEvent>();

        CreateMap<TblGame, GameDto>();
        CreateMap<GameDto, TblGame>();

        CreateMap<TblParticipant, ParticipantDto>();
        CreateMap<ParticipantDto, TblParticipant>();

        CreateMap<UserDTO, TblUser>();
        CreateMap<TblUser, UserDTO>();

        CreateMap<TimeslotDto, TblTimeslot>();
        CreateMap<TblTimeslot, TimeslotDto>();
    }
}
