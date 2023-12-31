﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class DailyTimetableDto
{
    public DateTime StartHour { get; set; }
    public IEnumerable<TimeslotDto>? AvailableTimeslots { get; set; }
    public DateTime EndHour { get; set; }
    public DailyTimetableDto(DateTime start, DateTime end, IEnumerable<TimeslotDto>? timelsots) 
    {
        StartHour = start;
        EndHour = end;
        AvailableTimeslots = timelsots;
    }
}
