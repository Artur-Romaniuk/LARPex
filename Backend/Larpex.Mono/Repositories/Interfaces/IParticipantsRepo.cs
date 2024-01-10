using Larpex.Mono.Models;
namespace Larpex.Mono.Repositories.Interfaces;

public interface IParticipantsRepo
{
    public Task<int> AddParticipant(ParticipantDto ParticipantDto);
    public Task<bool> UpdateParticipant(ParticipantDto existingParticipant);
    public Task<bool> DeleteParticipant(int id);
    public Task<bool> DeleteParticipant(UnassignUserDto unassignUser);
    public Task<ParticipantDto> GetParticipant(int id);
    public Task<IEnumerable<ParticipantDto>> GetParticipants();
}
