using Larpex.Mono.Models;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Repositories.Interfaces;

public interface IEventsRepo
{
    public Task<EventDto> CreateEvent(EventWithTimeslotDto eventWithTimeslotDto);
    public Task<EventDto> UpdateEvent(int id, EventDto existingEvent);
    public Task<bool> DeleteEvent(int id);
    public Task<EventTimeslotResponseDto> GetEvent(int id);
    public Task<IEnumerable<EventTimeslotResponseDto>> GetEvents();
    public Task<bool> AssignUser(AssignUserToEventDto assignUser);
    public Task<bool> UnassignUser(UnassignUserDto unassignUser);
    public Task<IEnumerable<UserEvent>> GetUserEvents(int userId);
}
