using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces
{
    public interface ICharacterRepo
    {
        Task<List<GameCharacterDto>> GetGameCharacters(int gameId);
    }
}
