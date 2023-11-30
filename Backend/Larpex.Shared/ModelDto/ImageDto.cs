using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class ImageDto
{
    public string ImageId { get; set; }

    [NotMapped]
    public IFormFile File { get; set; }

    public string FileName { get; set; }

    public string FileExtension { get; set; }

    public long FileSizeInBytes { get; set; }

    public string FilePath { get; set; }
}
