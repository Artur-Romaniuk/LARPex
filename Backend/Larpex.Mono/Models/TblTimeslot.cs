using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblTimeslot
{
    public string TimeslotId { get; set; } = null!;

    public DateTime TimeslotDatetime { get; set; }

    public TimeSpan TimeslotDuration { get; set; }

    public virtual ICollection<TblEvent> TblEvents { get; set; } = new List<TblEvent>();
}
