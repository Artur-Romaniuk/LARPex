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
        [ProducesResponseType(typeof(GameDto), StatusCodes.Status201Created)]
        public async Task<ActionResult<GameDto>> AddGame(CreateGameDto newGame)
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
        [ProducesResponseType(typeof(GameDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<GameDto>> GetGame(int id)
        {
            var existingGame = await _GameService.GetGame(id);
            if (existingGame == null)
            {
                return BadRequest($"No such Game with id {id}");
            }
            return Ok(existingGame);
        }

        [HttpGet("getGames")]
        [ProducesResponseType(typeof(IEnumerable<GameDto>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<GameDto>>> GetGames()
        {
            var existingGame = await _GameService.GetGames();
            return Ok(existingGame);
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