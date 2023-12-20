using Larpex.Mono.Models;
using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
namespace Larpex.Mono.Services;

public class CharacterService : ICharacterService
{
    private readonly ICharacterRepo _ICharacterRepo;
    public CharacterService(ICharacterRepo characterRepo)
    {
        _ICharacterRepo = characterRepo;
    }

    public async Task<List<GameCharacterDto>> GetGameCharacters(int gameId)
    {
        return await _ICharacterRepo.GetGameCharacters(gameId);
    }
}
