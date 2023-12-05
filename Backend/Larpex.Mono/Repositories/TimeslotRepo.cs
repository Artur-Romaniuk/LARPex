using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories;

public class TimeslotRepo : ITimeslotRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;

    public TimeslotRepo(
        LarpexDbContext context,
        IMapper mapper
        )
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<DailyTimetableDto> GetDailyTimeslots(DateTime date)
    {
        var dbTimeslots = await _context.TblTimeslots.Where(t => t.TimeslotDatetime.Date.Equals(date.Date)).ToListAsync();

        if (dbTimeslots.Count == 0 || dbTimeslots == null)
        {
            DateTime starta = new DateTime(date.Year, date.Month, date.Day);
            starta.AddHours(9);
            DateTime enda = new DateTime(date.Year, date.Month, date.Day);
            starta.AddHours(21);
            var availableTimeslots = new List<TimeslotDto>
                {
                    new TimeslotDto
                    {
                        TimeslotDatetime = DateTime.Today.AddHours(9),
                        TimeslotDuration = TimeSpan.FromHours(12)
                    }
                };
            return new DailyTimetableDto(starta, enda, availableTimeslots);
        }

        var dtoTimeslots = new List<TimeslotDto>(); 
        foreach(var ts in dbTimeslots)
        {
            dtoTimeslots.Add(_mapper.Map<TimeslotDto>(ts));
        }

        dtoTimeslots = dtoTimeslots.OrderBy(timeslot => timeslot.TimeslotDatetime).ToList();
        dtoTimeslots = CalculateAvailableSlots(dtoTimeslots);
        DateTime start = new DateTime(date.Year, date.Month, date.Day);
        start.AddHours(9);
        DateTime end = new DateTime(date.Year, date.Month, date.Day);
        start.AddHours(21);
        return new DailyTimetableDto(start, end, dtoTimeslots);
    }

    public async Task<TimeslotDto> GetTimeslot(string id)
    {
        return _mapper.Map<TimeslotDto>(await _context.TblTimeslots.FirstOrDefaultAsync(t => t.TimeslotId.Equals(id)));
    }

    private List<TimeslotDto> CalculateAvailableSlots(List<TimeslotDto> timeslots)
    {
        return timeslots.Select((ts, index) =>
        {
            var newTimeslotDatetime = ts.TimeslotDatetime + ts.TimeslotDuration;
            if (index + 1 < timeslots.Count())
            {
                var nextTimeslot = timeslots.ElementAt(index + 1);

                return new TimeslotDto
                {
                    TimeslotDatetime = newTimeslotDatetime,
                    TimeslotDuration = nextTimeslot.TimeslotDatetime - newTimeslotDatetime
                };
            }
            else
            {
                return new TimeslotDto
                {
                    TimeslotDatetime = ts.TimeslotDatetime,
                    TimeslotDuration = DateTime.Today.AddHours(21) - newTimeslotDatetime
                };
            }
        }).ToList();
    }
}
