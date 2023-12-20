using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace Larpex.Mono.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharacterController : ControllerBase
{
    private readonly ICharacterService _CharacterService;

    public CharacterController(
        ICharacterService CharacterService
        )
    {
        _CharacterService = CharacterService;
    }

    [HttpGet("{gameId}")]
    [ProducesResponseType(typeof(List<GameCharacterDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<List<GameCharacterDto>>> GetGameCharacters(int gameId)
    {
        var Character = await _CharacterService.GetGameCharacters(gameId);
        return Ok(Character);
    }
}