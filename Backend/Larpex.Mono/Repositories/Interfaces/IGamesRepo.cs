using Larpex.Mono.Models;
namespace Larpex.Mono.Repositories.Interfaces;

public interface IGamesRepo
{
    public Task<int> AddGame(GameDto Game);
    public Task<bool> UpdateGame(EditGameDto existingGame);
    public Task<bool> DeleteGame(int id);
    public Task<GameDto> GetGame(int id);
    public Task<IEnumerable<GameDto>> GetGames();
}
