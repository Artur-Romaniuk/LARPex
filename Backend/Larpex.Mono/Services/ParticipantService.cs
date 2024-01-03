using Larpex.Mono.Models;
using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
namespace Larpex.Mono.Services;

public class ParticipantService : IParticipantService
{
    private readonly IParticipantsRepo _IParticipantRepo;
    public ParticipantService(IParticipantsRepo participantRepo)
    {
        _IParticipantRepo = participantRepo;
    }

    public async Task<int> AddParticipant(ParticipantDto Participant)
    {
        return await _IParticipantRepo.AddParticipant(Participant);
    }

    public async Task<bool> DeleteParticipant(int id)
    {
        return await _IParticipantRepo.DeleteParticipant(id);
    }
    public async Task<bool> DeleteParticipant(UnassignUserDto unassignUser)
    {
        return await _IParticipantRepo.DeleteParticipant(unassignUser);
    }

    public async Task<ParticipantDto> GetParticipant(int id)
    {
        return await _IParticipantRepo.GetParticipant(id);
    }

    public async Task<IEnumerable<ParticipantDto>> GetParticipants()
    {
        return await _IParticipantRepo.GetParticipants();
    }

    public async Task<bool> UpdateParticipant(ParticipantDto Participant)
    {
        return await _IParticipantRepo.UpdateParticipant(Participant);
    }
}
