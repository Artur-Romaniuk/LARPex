using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories;

public class LocationRepo : ILocationRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;

    public LocationRepo(
        LarpexDbContext context,
        IMapper mapper
        )
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<LocationDto> CreateLocation(LocationDto location)
    {
        var dbLocation = _mapper.Map<LocationDto>( location );
        await _context.AddAsync( dbLocation );
        await _context.SaveChangesAsync();
        return location;
    }

    public async Task<LocationDto> GetLocation(int id)
    {
        var dbLocation = await _context.TblLocations.FirstOrDefaultAsync(l => l.LocationId == id);
        if ( dbLocation == null )
        {
            throw new ArgumentException("Location with provided id does not exist");
        }
        return _mapper.Map<LocationDto>(dbLocation);
    }

    public async Task<IEnumerable<LocationDto>> GetLocations()
    {
        var locations = new List<LocationDto>();
        var dbLocations = await _context.TblLocations.ToListAsync();
        foreach ( var dbLocation in dbLocations )
        {
            locations.Add(_mapper.Map<LocationDto>(dbLocation));
        }
        return locations;
    }
}
