using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories;

public class EventsRepo : IEventsRepo
{
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
