using Larpex.Mono.Models;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services.Interfaces;

public interface IParticipantService
{
    public Task<int> AddParticipant(ParticipantDto Participant);
    public Task<ParticipantDto> GetParticipant(int id);
    public Task<IEnumerable<ParticipantDto>> GetParticipants();
    public Task<bool> DeleteParticipant(int id);
    public Task<bool> UpdateParticipant(ParticipantDto Participant);
}
