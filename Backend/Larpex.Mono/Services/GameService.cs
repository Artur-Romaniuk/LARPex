using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;

namespace Larpex.Mono.Services;

public class GameService : IGameService
{
    private readonly IGamesRepo _IGameRepo;
    public GameService(IGamesRepo GameRepo)
    {
        _IGameRepo = GameRepo;
    }

    public async Task<int> AddGame(GameDto Game)
    {
        return await _IGameRepo.AddGame(Game);
    }

    public async Task<bool> DeleteGame(int id)
    {
        return await _IGameRepo.DeleteGame(id);
    }

    public async Task<GameDto> GetGame(int id)
    {
        return await _IGameRepo.GetGame(id);
    }

    public async Task<IEnumerable<GameDto>> GetGames()
    {
        return await _IGameRepo.GetGames();
    }

    public async Task<bool> UpdateGame(EditGameDto Game)
    {
        return await _IGameRepo.UpdateGame(Game);
    }
}
