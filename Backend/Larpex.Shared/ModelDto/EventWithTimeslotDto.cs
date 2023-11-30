using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class EventWithTimeslotDto
{
    public string EventName { get; set; } = string.Empty;
    public string EventDescription { get; set; } = string.Empty;
    public int LocationId { get; set; }
    public int GameId { get; set; }
    public DateTime StartDate { get; set; }
    public int DurationHour { get; set; }
    public int DurationMinute { get; set; }
    public int AttendeesCount { get; set; }
    public IFormFile Icon { get; set; }
}
