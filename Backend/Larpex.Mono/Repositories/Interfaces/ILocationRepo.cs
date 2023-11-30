using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Repositories.Interfaces;

public interface ILocationRepo
{
    public Task<IEnumerable<LocationDto>> GetLocations();
    public Task<LocationDto> CreateLocation(LocationDto location);
    public Task<LocationDto> GetLocation(int id);

}
