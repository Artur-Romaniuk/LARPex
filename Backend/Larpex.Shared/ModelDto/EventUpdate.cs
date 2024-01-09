using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class EventUpdate
{
    public int EventId { get; set; }

    public string EventName { get; set; } = null!;

    public string? EventDescription { get; set; }

    public string? EventIconUrl { get; set; }

    public int? LocationId { get; set; }

    public int? GameId { get; set; }

    public string? TimeslotId { get; set; }

    public bool ChangeTimeslot { get; set; }
    public DateTime StartDate { get; set; }
    public int DurationHour { get; set; }
    public int DurationMinute { get; set; }
    public int AttendeesCount { get; set; }
    public int UserId { get; set; }
    public IFormFile Icon { get; set; }
}
