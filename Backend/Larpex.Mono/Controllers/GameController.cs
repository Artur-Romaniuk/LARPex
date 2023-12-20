using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private readonly IGameService _GameService;
        private readonly IMapper _mapper;

        public GameController(IGameService Gameervice, IMapper mapper)
        {
            _GameService = Gameervice;
            _mapper = mapper;
        }

        [HttpPost]
        [ProducesResponseType(typeof(GameGetDto), StatusCodes.Status201Created)]
        public async Task<ActionResult<GameGetDto>> AddGame(CreateGameDto newGame)
        {
            var createdGame = await _GameService.AddGame(_mapper.Map<GameDto>(newGame));
            return CreatedAtAction("GetGame", new { id = createdGame }, newGame);
        }

        [HttpDelete]
        [ProducesResponseType(typeof(bool), StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<bool>> DeleteGame(int id)
        {
            var success = await _GameService.DeleteGame(id);
            if (!success)
            {
                return BadRequest($"Could not delete Game with id {id}");
            }
            return NoContent();
        }

        [HttpGet("getGame/{id}")]
        [ProducesResponseType(typeof(GameGetDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<GameGetDto>> GetGame(int id)
        {
            var existingGame = await _GameService.GetGame(id);
            if (existingGame == null)
                return BadRequest($"No such Game with id {id}");
            else
                return Ok(existingGame);
        }

        [HttpGet("getGames")]
        [ProducesResponseType(typeof(IEnumerable<GameGetDto>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<GameGetDto>>> GetGames()
        {
            var existingGames = await _GameService.GetGames();
            return Ok(existingGames);
        }

        [HttpPut]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<GameDto>> UpdateGame([FromBody]EditGameDto newValuesGame)
        {
            var existingGame = await _GameService.GetGame(newValuesGame.GameId);
            if (existingGame == null)
            {
                return BadRequest($"No such Game with id {newValuesGame.GameId}");
            }

            var updatedGame = await _GameService.UpdateGame(newValuesGame);
            return Ok(updatedGame);
        }
    }
}