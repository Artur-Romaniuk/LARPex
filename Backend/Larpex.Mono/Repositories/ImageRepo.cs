using AutoMapper;
using Azure.Core;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories;

public class ImageRepo : IImageRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    private readonly IWebHostEnvironment _env;
    private readonly IHttpContextAccessor _contextAccessor;
    private const uint MAX_BYTE_SIZE = 10000000;

    public ImageRepo(
        LarpexDbContext context,
        IHttpContextAccessor httpContextAccessor,
        IMapper mapper,
        IWebHostEnvironment env
        )
    {
        _context = context;
        _mapper = mapper;
        _env = env;
    }
    public async Task<ImageDto> UploadImage(IFormFile image)
    {
        ValidateImageUpload(image);
        var imageExtension = Path.GetExtension(image.FileName);
        var localFilePath = Path.Combine(_env.ContentRootPath, "Images",
            $"{image.FileName}{imageExtension}");

        using var stream = new FileStream(localFilePath, FileMode.Create);
        await image.CopyToAsync(stream);

        var ca = _contextAccessor.HttpContext!.Request;
        var urlFilePath = $"{ca.Scheme}://{ca.Host}{ca.PathBase}/Images/{image.FileName}{imageExtension}";

        var newImage = new TblImage 
        { 
            ImageId = Guid.NewGuid().ToString(),
            FileName = image.FileName,
            FileExtension = imageExtension,
            FileSizeInBytes = image.Length,
            FilePath = urlFilePath
        };

        await _context.TblImages.AddAsync(newImage);
        await _context.SaveChangesAsync();

        return _mapper.Map<ImageDto>(newImage);
    }

    public async Task<ImageDto> GetImage(string? id, string description)
    {
        var dbImage = new TblImage();

        if (id != string.Empty)
        {
            dbImage = await _context.TblImages.FirstOrDefaultAsync(x => x.ImageId.Equals(id));
        }
        else
        {
            dbImage = await _context.TblImages.FirstOrDefaultAsync(x => x.FileName.Equals(description));
        }

        if (dbImage == null || dbImage.ImageId == string.Empty || dbImage.ImageId == null)
        {
            throw new ArgumentException("Could not find this image in database.");
        }

        return _mapper.Map<ImageDto>(dbImage);
    }

    private async void ValidateImageUpload(IFormFile image)
    {
        var allowedExtensions = new string[] { ".jpg", ".jpeg", ".png" };
        var dbImage = await _context.TblImages.FirstOrDefaultAsync(i => i.FileName.Equals(image.FileName));
        if(dbImage != null)
        {
            throw new ArgumentException("Filename exists! Change filename of the icon");
        }
        if (!allowedExtensions.Contains(Path.GetExtension(image.FileName)))
        {
            throw new ArgumentException("file", "Unsupported file extension.");
        }

        if (image.Length > MAX_BYTE_SIZE)
        {
            throw new ArgumentException("File size more than 10MB, please upload smaller size file.");
        }
    }
}
