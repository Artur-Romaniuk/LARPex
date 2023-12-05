﻿using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces;

public interface IEventsRepo
{
    public Task<EventDto> CreateEvent(EventWithTimeslotDto eventWithTimeslotDto);
    public Task<EventDto> UpdateEvent(int id, EventDto existingEvent);
    public Task<bool> DeleteEvent(int id);
    public Task<EventTimeslotResponseDto> GetEvent(int id);
    public Task<IEnumerable<EventDto>> GetEvents();
}
