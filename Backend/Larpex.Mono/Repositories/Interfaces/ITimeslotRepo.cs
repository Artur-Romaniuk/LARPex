using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces;

public interface ITimeslotRepo
{
    public Task<DailyTimetableDto> GetDailyTimeslots(DateTime date);
}