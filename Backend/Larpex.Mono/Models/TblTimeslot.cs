using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblTimeslot
{
    public int TimeslotId { get; set; }

    public DateTime TimeslotDatetime { get; set; }

    public TimeSpan TimeslotDuration { get; set; }

    public virtual ICollection<TblEvent> TblEvents { get; set; } = new List<TblEvent>();
}
