using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class EventTimeslotResponseDto
{
    public int EventId { get; set; }

    public string EventName { get; set; } = null!;

    public string EventStatus { get; set; } = null!;

    public string? EventDescription { get; set; }

    public string? OrderId { get; set; }

    public int? LocationId { get; set; }

    public int? GameId { get; set; }

    public string? TimeslotId { get; set; }
}
