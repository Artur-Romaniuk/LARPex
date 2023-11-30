using Larpex.Mono.Models;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Services.Interfaces;

public interface IGameService
{
    public Task<int> AddGame(GameDto game);
    public Task<GameDto> GetGame(int id);
    public Task<IEnumerable<GameDto>> GetGames();
    public Task<bool> DeleteGame(int id);
    public Task<bool> UpdateGame(EditGameDto game);
}
