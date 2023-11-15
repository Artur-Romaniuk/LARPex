using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories;

public class EventsRepo : IEventsRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    private readonly IPaymentService _paymentService;

    public EventsRepo(
        LarpexDbContext context,
        IMapper mapper,
        IPaymentService paymentService
        )
    {
        _context = context;
        _mapper = mapper;
        _paymentService = paymentService;
    }
    public Task<EventDto> CreateEvent(EventDto eventDto)
    {
        throw new NotImplementedException();
    }

    public Task<bool> DeleteEvent(int id)
    {
        throw new NotImplementedException();
    }

    public Task<EventDto> GetEvent(int id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<EventDto>> GetEvents()
    {
        throw new NotImplementedException();
    }

    public Task<EventDto> UpdateEvent(int id, EventDto existingEvent)
    {
        throw new NotImplementedException();
    }
}
