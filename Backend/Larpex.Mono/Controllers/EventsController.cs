using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EventsController : ControllerBase
{
    private readonly IEventsRepo _eventsRepo;

    public EventsController(
        IEventsRepo eventsRepo
        )
    {
        _eventsRepo = eventsRepo;
    }

    [HttpPost]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<EventDto>> CreateEvent([FromForm]EventWithTimeslotDto eventWith)
    {
        var createdEvent = await _eventsRepo.CreateEvent(eventWith);
        return Ok(new { createdEvent.EventId, createdEvent.OrderId});
        //return CreatedAtAction("GetEvent", new { id = createdEvent.EventId }, eventWith);
    }


    [HttpDelete]
    [ProducesResponseType(typeof(bool), StatusCodes.Status204NoContent)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<bool>> DeleteEvent(int id)
    {
        var success = await _eventsRepo.DeleteEvent(id);
        if (!success)
        {
            return BadRequest($"Could not delete event with id {id}");
        }
        return NoContent();
    }

    [HttpGet("getEvent/{id}")]
    [ProducesResponseType(typeof(EventDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<EventTimeslotResponseDto>> GetEvent(int id)
    {
        var existingEvent = await _eventsRepo.GetEvent(id);
        if(existingEvent == null)
        {
            return BadRequest($"No such event with id {id}");
        }
        return Ok(existingEvent);
    }

    [HttpGet("getEvents")]
    [ProducesResponseType(typeof(IEnumerable<EventTimeslotResponseDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<EventTimeslotResponseDto>>> GetEvents()
    {
        var existingEvents = await _eventsRepo.GetEvents();
        return Ok(existingEvents);
    }

    [HttpPut]
    [ProducesResponseType(typeof(EventDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<EventDto>> UpdateEvent([FromQuery]int id, [FromForm] EventUpdate existingEvent)
    {
        if(id != existingEvent.EventId)
        {
            return BadRequest("Id does not match.");
        }
        var updatedEvent = await _eventsRepo.UpdateEvent(id, existingEvent);
        return Ok(updatedEvent);
    }

    [HttpPost("assignUser")]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<bool>> AssignUser([FromBody] AssignUserToEventDto eventWith)
    {
        var assignUser = await _eventsRepo.AssignUser(eventWith);
        return Ok(assignUser);
    }

    [HttpPost("unassignUser")]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<EventDto>> UnassignUser([FromBody] UnassignUserDto eventWith)
    {
        var unassignUser = await _eventsRepo.UnassignUser(eventWith);
        return Ok(unassignUser);
    }

    [HttpGet("userEvents")]
    public async Task<ActionResult<IEnumerable<UserEvent>>> GetUserEvents(int userId)
    {
        if(userId == null)
        {
            return BadRequest();
        }
        var existingEvents = await _eventsRepo.GetUserEvents(userId);
        return Ok(existingEvents);
    }
}