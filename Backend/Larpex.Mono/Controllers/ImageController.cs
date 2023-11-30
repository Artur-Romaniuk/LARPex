using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace Larpex.Mono.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private readonly IImageRepo _imageRepo;
    private const uint MAX_BYTE_SIZE = 10000000;

    public ImageController(
        IImageRepo imageRepo
        )
    {
        _imageRepo = imageRepo;
    }

    [HttpGet]
    [ProducesResponseType(typeof(ImageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
    public async Task<ActionResult<ImageDto>> GetImage(string? id, string filename)
    {
        var image = await _imageRepo.GetImage(id, filename);

        return Ok(image);
    }
}