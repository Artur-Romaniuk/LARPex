using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

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

    public async Task<int> AddParticipant(ParticipantDto Participant)
    {
        var response = await _context.TblParticipants.AddAsync(_mapper.Map<TblParticipant>(Participant));
        await _context.SaveChangesAsync();
        return response.Entity.ParticipantId;
    }

    public async Task<bool> DeleteParticipant(int id)
    {
        var entity = await _context.TblParticipants.FirstOrDefaultAsync(p => p.ParticipantId == id);
        if (entity != null)
        {
            _context.TblParticipants.Remove(entity);
            await _context.SaveChangesAsync();
        }
        return true;
    }

    public async Task<ParticipantDto> GetParticipant(int id)
    {
        var g = await _context.TblParticipants.FirstOrDefaultAsync(g => g.ParticipantId == id);
        if (g != null)
            return _mapper.Map<ParticipantDto>(g);
        else
            return null;
    }
    public async Task<IEnumerable<ParticipantDto>> GetParticipants()
    {
        IEnumerable<TblParticipant> Participants = await _context.TblParticipants.ToListAsync();
        var r = Participants.Select(u => _mapper.Map<ParticipantDto>(u));
        return r;
    }

    public async Task<bool> UpdateParticipant(ParticipantDto existingParticipant)
    {
        var ParticipantDB = await _context.TblParticipants.FirstOrDefaultAsync(u => u.ParticipantId == existingParticipant.ParticipantId);
        if (ParticipantDB == null)
            return false;

        TblParticipant Participant = _mapper.Map<TblParticipant>(existingParticipant);

        _context.Entry(ParticipantDB).State = EntityState.Detached;
        _context.TblParticipants.Attach(Participant);
        _context.TblParticipants.Entry(Participant).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return true;
    }
}
