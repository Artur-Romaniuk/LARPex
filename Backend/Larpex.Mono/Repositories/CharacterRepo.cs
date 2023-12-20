using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;
using Stripe;
using Stripe.Terminal;
using System.ComponentModel;
using System.Drawing;
using System.IO;

namespace Larpex.Mono.Repositories;

public class CharacterRepo : ICharacterRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;

    public CharacterRepo(
        LarpexDbContext context,
        IMapper mapper
        )
    {
        _context = context;
        _mapper = mapper;
    }
    
    public async Task<List<GameCharacterDto>> GetGameCharacters(int gameId)
    {
        List<TblCharacter> characters = await _context.TblCharacters.Where(u => u.GameId == gameId).ToListAsync();
        List<GameCharacterDto> res = characters.Select(u => _mapper.Map<GameCharacterDto>(u)).ToList();
        return res;
    }
}
