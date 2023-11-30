using System.ComponentModel.DataAnnotations.Schema;

namespace Larpex.Mono.Models;

public class TblImage
{
    public string ImageId { get; set; }

    [NotMapped]
    public IFormFile File { get; set; }

    public string FileName { get; set; }

    public string FileExtension { get; set; }

    public long FileSizeInBytes { get; set; }

    public string FilePath { get; set; }
}
