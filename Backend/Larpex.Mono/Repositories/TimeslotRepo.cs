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
            return new DailyTimetableDto
            {
                ReservedTimeslots = new List<TimeslotDto>(0)
            };
        }
        var dtoTimeslots = new List<TimeslotDto>(); 
        foreach(var ts in dbTimeslots)
        {
            dtoTimeslots.Add(_mapper.Map<TimeslotDto>(ts));
        }

        dtoTimeslots = dtoTimeslots.OrderBy(timeslot => timeslot.TimeslotDatetime).ToList();
        return new DailyTimetableDto
        {
            ReservedTimeslots = dtoTimeslots
        };
    }
}
