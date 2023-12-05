using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblImage
{
    public string ImageId { get; set; } = null!;

    public string Filename { get; set; } = null!;

    public string FileExtension { get; set; } = null!;

    public long FileSizeInBytes { get; set; }

    public string FilePath { get; set; } = null!;
}
