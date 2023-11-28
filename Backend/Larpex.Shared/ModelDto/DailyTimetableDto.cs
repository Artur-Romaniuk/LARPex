using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class DailyTimetableDto
{
    public DateTime StartHour { get; set; } = DateTime.Today.AddHours(9);
    public IEnumerable<TimeslotDto>? ReservedTimeslots { get; set; }
    public DateTime EndHour { get; set; } = DateTime.Today.AddHours(21);
}
