using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class TimeslotDto
{
    public DateTime TimeslotDatetime { get; set; }

    public TimeSpan TimeslotDuration { get; set; }
}
