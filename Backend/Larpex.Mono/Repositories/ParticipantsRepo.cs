using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories;

public class ParticipantsRepo : IParticipantsRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    private readonly IPaymentService _paymentService;

    public ParticipantsRepo(
        LarpexDbContext context,
        IMapper mapper,
        IPaymentService paymentService
        )
    {
        _context = context;
        _mapper = mapper;
        _paymentService = paymentService;
    }
    public Task<int> AddParticipant(ParticipantDto Participant)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteParticipant(int id)
    {
        throw new NotImplementedException();
    }

    public Task<ParticipantDto> GetParticipant(int id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<ParticipantDto>> GetParticipants()
    {
        throw new NotImplementedException();
    }

    public Task<bool> UpdateParticipant(ParticipantDto existingParticipant)
    {
        throw new NotImplementedException();
    }
}
