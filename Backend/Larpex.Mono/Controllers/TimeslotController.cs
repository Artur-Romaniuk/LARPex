using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TimeslotController : ControllerBase
    {
        private readonly ITimeslotRepo _timeslotRepo;

        public TimeslotController(
            ITimeslotRepo timeslotRepo
            )
        {
            _timeslotRepo = timeslotRepo;
        }

        [HttpGet]
        [ProducesResponseType(typeof(DailyTimetableDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<DailyTimetableDto>> GetDailyTimeslots(DateTime date)
        {
            var dailyTimeslots = await _timeslotRepo.GetDailyTimeslots(date);

            return Ok(dailyTimeslots);
        }
    }
}