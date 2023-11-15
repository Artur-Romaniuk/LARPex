using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;

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
    public Task<int> AddGame(GameDto Game)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteGame(int id)
    {
        throw new NotImplementedException();
    }

    public Task<GameDto> GetGame(int id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<GameDto>> GetGames()
    {
        throw new NotImplementedException();
    }

    public Task<bool> UpdateGame(GameDto existingGame)
    {
        throw new NotImplementedException();
    }
}
