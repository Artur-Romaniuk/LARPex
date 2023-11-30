using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblEvent
{
    public int EventId { get; set; }

    public string EventName { get; set; } = null!;

    public string EventStatus { get; set; } = null!;

    public string? EventDescription { get; set; }

    public string? EventIconUrl { get; set; }

    public string? OrderId { get; set; }

    public int? LocationId { get; set; }

    public int? GameId { get; set; }

    public string? TimeslotId { get; set; }

    public virtual TblGame? Game { get; set; }

    public virtual TblLocation? Location { get; set; }

    public virtual TblOrder? Order { get; set; }

    public virtual ICollection<TblParticipant> TblParticipants { get; set; } = new List<TblParticipant>();

    public virtual TblTimeslot? Timeslot { get; set; }
}
