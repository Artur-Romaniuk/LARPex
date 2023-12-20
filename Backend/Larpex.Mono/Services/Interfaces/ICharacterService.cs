using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services.Interfaces
{
    public interface ICharacterService
    {
        Task<List<GameCharacterDto>> GetGameCharacters(int gameId);
    }
}
