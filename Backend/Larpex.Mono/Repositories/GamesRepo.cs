using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories;

public class GamesRepo : IGamesRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    private readonly IPaymentService _paymentService;

    public GamesRepo(
        LarpexDbContext context,
        IMapper mapper,
        IPaymentService paymentService
        )
    {
        _context = context;
        _mapper = mapper;
        _paymentService = paymentService;
    }

    public async Task<int> AddGame(GameDto Game)
    {
        var response = await _context.TblGames.AddAsync(_mapper.Map<TblGame>(Game));
        await _context.SaveChangesAsync();
        return response.Entity.GameId;
    }

    public async Task<bool> DeleteGame(int id)
    {
        var entity = await _context.TblGames.FirstOrDefaultAsync(p => p.GameId == id);
        if (entity != null)
        {
            _context.TblGames.Remove(entity);
            await _context.SaveChangesAsync();
        }
        return true;
    }

    public async Task<GameDto> GetGame(int id)
    {
        var g = await _context.TblGames.FirstOrDefaultAsync(g => g.GameId == id);
        if (g != null)
            return _mapper.Map<GameDto>(g);
        else
            return null;
    }

    public async Task<IEnumerable<GameDto>> GetGames()
    {
        IEnumerable<TblGame> games = await _context.TblGames.ToListAsync();
        return games.Select(u => _mapper.Map<GameDto>(u));
    }

    public async Task<bool> UpdateGame(EditGameDto existingGame)
    {
        var gameDB = await _context.TblGames.FirstOrDefaultAsync(u => u.GameId == existingGame.GameId);
        if (gameDB == null)
            return false;

        TblGame game = _mapper.Map<TblGame>(existingGame);

        _context.Entry(gameDB).State = EntityState.Detached;
        _context.TblGames.Attach(game);
        _context.TblGames.Entry(game).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return true;
    }
}
