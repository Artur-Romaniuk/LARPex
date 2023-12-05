using Larpex.Mono.Repositories;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;

namespace Larpex.Mono.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepo _userRepo;

        public UserController(
            IUserRepo userRepo
            )
        {
            _userRepo = userRepo;
        }

        [HttpGet("getUser/{id}")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> GetUser(int id)
        {
            var existingEvent = await _userRepo.GetUser(id);
            if (existingEvent != null)
            {
                return BadRequest($"No such event with id {id}");
            }
            return Ok(existingEvent);
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<UserDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUsers()
        {
            var existingEvents = await _userRepo.GetUsers();
            return Ok(existingEvents);
        }

        [HttpPost]
        [ProducesResponseType(typeof(IEnumerable<UserDTO>), StatusCodes.Status200OK)]
        public async Task<ActionResult<int>> CreateUser(UserDTO user)
        {
            var userId = await _userRepo.CreateUser(user);
            return Ok(userId);
        }
    }
}