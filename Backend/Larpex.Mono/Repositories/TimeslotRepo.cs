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

        DateTime start = new DateTime(date.Year, date.Month, date.Day).AddHours(9);
        DateTime end = new DateTime(date.Year, date.Month, date.Day).AddHours(21);

        if (dbTimeslots == null || dbTimeslots.Count == 0)
        {
            var availableTimeslots = new List<TimeslotDto>
        {
            new TimeslotDto
            {
                TimeslotDatetime = start,
                TimeslotDuration = end - start
            }
        };
            return new DailyTimetableDto(start, end, availableTimeslots);
        }

        var occupiedSlots = dbTimeslots.Select(ts => new
        {
            Start = ts.TimeslotDatetime,
            End = ts.TimeslotDatetime + ts.TimeslotDuration
        }).ToList();

        var availableSlots = new List<TimeslotDto>();

        DateTime currentSlotStart = start;
        foreach (var slot in occupiedSlots)
        {
            if (slot.Start > currentSlotStart)
            {
                var availableSlot = new TimeslotDto
                {
                    TimeslotDatetime = currentSlotStart,
                    TimeslotDuration = slot.Start - currentSlotStart
                };
                availableSlots.Add(availableSlot);
            }

            if (slot.End > currentSlotStart)
            {
                currentSlotStart = slot.End;
            }
        }

        if (currentSlotStart < end)
        {
            var lastAvailableSlot = new TimeslotDto
            {
                TimeslotDatetime = currentSlotStart,
                TimeslotDuration = end - currentSlotStart
            };
            availableSlots.Add(lastAvailableSlot);
        }

        return new DailyTimetableDto(start, end, availableSlots);
    }

    public async Task<TimeslotDto> GetTimeslot(string id)
    {
        return _mapper.Map<TimeslotDto>(await _context.TblTimeslots.FirstOrDefaultAsync(t => t.TimeslotId.Equals(id)));
    }
}
