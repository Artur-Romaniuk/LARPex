using Larpex.Mono.Models;
using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces;

public interface IImageRepo
{
    public Task<ImageDto> UploadImage(IFormFile image);
    public Task<ImageDto> GetImage(string? id, string filename);
}
