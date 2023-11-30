using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LocationController : ControllerBase
{
    private readonly ILocationRepo _locationRepo;

    public LocationController(
        ILocationRepo locationRepo
        )
    {
        _locationRepo = locationRepo;
    }

    [HttpGet("getLocations")]
    [ProducesResponseType(typeof(IEnumerable<LocationDto>), StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<LocationDto>>> GetEvents()
    {
        var existingLocations = await _locationRepo.GetLocations();
        return Ok(existingLocations);
    }
}