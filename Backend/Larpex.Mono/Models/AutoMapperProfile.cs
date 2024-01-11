using AutoMapper;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Models;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<TblEvent, EventDto>();
        CreateMap<EventDto, TblEvent>();

        CreateMap<EventUpdate, EventDto>();
        CreateMap<EventDto, EventUpdate>();

        CreateMap<EventWithTimeslotDto, EventDto>();
        CreateMap<EventDto, EventWithTimeslotDto>();

        CreateMap<TblGame, GameDto>();
        CreateMap<GameDto, TblGame>();

        CreateMap<GameGetDto, GameDto>();
        CreateMap<GameDto, GameGetDto>();

        CreateMap<TblGame, EditGameDto>();
        CreateMap<EditGameDto, TblGame>();

        CreateMap<CreateGameDto, GameDto>();
        CreateMap<GameDto, CreateGameDto>();

        CreateMap<TblCharacter, CharacterDto>();
        CreateMap<CharacterDto, TblCharacter>();

        CreateMap<TblCharacter, GameCharacterDto>();
        CreateMap<GameCharacterDto, TblCharacter>();

        CreateMap<TblParticipant, ParticipantDto>();
        CreateMap<ParticipantDto, TblParticipant>();

        CreateMap<ParticipantDto, CreateParticipantDto>();
        CreateMap<CreateParticipantDto, ParticipantDto>();

        CreateMap<UserDTO, TblUser>();
        CreateMap<TblUser, UserDTO>();

        CreateMap<TimeslotDto, TblTimeslot>();
        CreateMap<TblTimeslot, TimeslotDto>();

        CreateMap<LocationDto, TblLocation>();
        CreateMap<TblLocation, LocationDto>();

        CreateMap<ImageDto, TblImage>();
        CreateMap<TblImage, ImageDto>();
    }
}
