﻿using Microsoft.AspNetCore.Http;
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

    public string GameName { get; set; } = string.Empty;
    
    public int ParticipantsCount { get; set; }

    public int MaxParticipants { get; set; }

    public string? EventDescription { get; set; }

    public string? OrderId { get; set; }

    public int? LocationId { get; set; }

    public int? GameId { get; set; }

    public TimeslotDto Timeslot { get; set; }
    public string Icon { get; set; }
}
