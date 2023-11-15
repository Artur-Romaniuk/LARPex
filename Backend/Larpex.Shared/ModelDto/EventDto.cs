using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class EventDto
{
    public int Id { get; set; }
    public string EventName { get; set; }
    public string EventStatus { get; set; }
    public string EventDescription { get; set; }
}
