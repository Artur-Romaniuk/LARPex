using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;

namespace Larpex.Mono.Services;

public class GameService : IGameService
{
    private readonly IGamesRepo _IGameRepo;
    private readonly IMapper _mapper;
    private readonly ICharacterService _CharacterService;
    public GameService(IGamesRepo GameRepo, ICharacterService characterService, IMapper mapper)
    {
        _IGameRepo = GameRepo;
        _mapper = mapper;
        _CharacterService = characterService;
    }

    public async Task<int> AddGame(GameDto Game)
    {
        return await _IGameRepo.AddGame(Game);
    }

    public async Task<bool> DeleteGame(int id)
    {
        return await _IGameRepo.DeleteGame(id);
    }

    public async Task<GameGetDto> GetGame(int id)
    {
        var game = await _IGameRepo.GetGame(id);
        var res = await _CharacterService.GetGameCharacters(id);

        GameGetDto resp = _mapper.Map<GameGetDto>(game);
        resp.Characters = res;
        return resp;
    }

    public async Task<IEnumerable<GameGetDto>> GetGames()
    {
        var resp = await _IGameRepo.GetGames();

        List<GameGetDto> games = new List<GameGetDto>();
        foreach(var game in resp)
        {
            var res = await _CharacterService.GetGameCharacters(game.GameId);
            GameGetDto game1 = _mapper.Map<GameGetDto>(game);
            game1.Characters = res;
            games.Add(game1);
        }
        return games;
    }

    public async Task<bool> UpdateGame(EditGameDto Game)
    {
        return await _IGameRepo.UpdateGame(Game);
    }
}
