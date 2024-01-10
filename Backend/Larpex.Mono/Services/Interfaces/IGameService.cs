using Larpex.Mono.Models;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services.Interfaces;

public interface IGameService
{
    public Task<int> AddGame(GameDto game);
    public Task<GameGetDto> GetGame(int id);
    public Task<IEnumerable<GameGetDto>> GetGames();
    public Task<bool> DeleteGame(int id);
    public Task<bool> UpdateGame(EditGameDto game);
}
