using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblLocation
{
    public int LocationId { get; set; }

    public string LocationAddress { get; set; } = null!;

    public decimal UserHourPrice { get; set; }

    public virtual ICollection<TblEvent> TblEvents { get; set; } = new List<TblEvent>();
}
