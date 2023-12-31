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
    public class ParticipantController : ControllerBase
    {
        private readonly IParticipantService _ParticipantService;
        private readonly IMapper _mapper;

        public ParticipantController(IParticipantService ParticipantService, IMapper mapper)
        {
            _mapper = mapper;
            _ParticipantService = ParticipantService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(ParticipantDto), StatusCodes.Status201Created)]
        public async Task<ActionResult<ParticipantDto>> AddParticipant(CreateParticipantDto newParticipant)
        {
            var createdParticipant = await _ParticipantService.AddParticipant(_mapper.Map<ParticipantDto>(newParticipant));
            return CreatedAtAction("GetParticipant", new { id = createdParticipant }, newParticipant);
        }

        [HttpDelete]
        [ProducesResponseType(typeof(bool), StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<bool>> DeleteParticipant(int id)
        {
            var success = await _ParticipantService.DeleteParticipant(id);
            if (!success)
            {
                return BadRequest($"Could not delete Participant with id {id}");
            }
            return NoContent();
        }

        [HttpGet("getParticipant/{id}")]
        [ProducesResponseType(typeof(ParticipantDto), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ParticipantDto>> GetParticipant(int id)
        {
            var existingParticipant = await _ParticipantService.GetParticipant(id);
            if (existingParticipant == null)
            {
                return BadRequest($"No such Participant with id {id}");
            }
            return Ok(existingParticipant);
        }

        [HttpGet("getParticipants")]
        [ProducesResponseType(typeof(IEnumerable<ParticipantDto>), StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<ParticipantDto>>> GetParticipants()
        {
            var existingParticipants = await _ParticipantService.GetParticipants();
            return Ok(existingParticipants);
        }

        [HttpPut]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ParticipantDto>> UpdateParticipant(ParticipantDto existingParticipant)
        {
            if (existingParticipant.ParticipantId != existingParticipant.ParticipantId)
            {
                return BadRequest("ParticipantId does not match.");
            }
            var updatedParticipant = await _ParticipantService.UpdateParticipant(existingParticipant);
            return Ok(updatedParticipant);
        }
    }
}
