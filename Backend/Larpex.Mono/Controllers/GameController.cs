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

        public GameController(IGameService Gameervice)
        {
            _GameService = Gameervice;
        }

        [HttpPost]
        [ProducesResponseType(typeof(GameDto), StatusCodes.Status201Created)]
        public async Task<ActionResult<GameDto>> AddGame(GameDto newGame)
        {
            var createdGame = await _GameService.AddGame(newGame);
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
            if(existingGame != null)
            {
                return BadRequest($"No such Game with id {id}");
            }
            return Ok(existingGame);
        }

        [HttpGet("getGames")]
        [ProducesResponseType(typeof(IEnumerable<GameDto>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<GameDto>>> GetGame()
        {
            var existingGame = await _GameService.GetGames();
            return Ok(existingGame);
        }

        [HttpPut]
        [ProducesResponseType(typeof(GameDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<GameDto>> UpdateGame(GameDto existingGame)
        {
            if(existingGame.Id != existingGame.Id)
            {
                return BadRequest("Id does not match.");
            }
            var updatedGame = await _GameService.UpdateGame(existingGame);
            return Ok(updatedGame);
        }
    }
}