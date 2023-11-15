using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly ILogger<EventsController> _logger;

        public EventsController(ILogger<EventsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public async Task<ActionResult<EventDto>> CreateEvent(EventDto newEvent)
        {
            return Ok();
        }
        [HttpDelete]
        public async Task<ActionResult<bool>> DeleteEvent(int id)
        {
            return Ok();
        }
        [HttpGet]
        public async Task<ActionResult<EventDto>> GetEvent(int id)
        {
            return Ok();
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EventDto>>> GetEvents()
        {
            return Ok();
        }
        [HttpPut]
        public async Task<ActionResult<EventDto>> UpdateEvent(int id, EventDto existingEvent)
        {
            return Ok();
        }
    }
}