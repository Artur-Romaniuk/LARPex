using Microsoft.EntityFrameworkCore;

namespace Larpex.Events.Api.Models;

public class LarpexDbContext : DbContext
{
    public DbSet<Event> Events { get; set; }

    public LarpexDbContext(DbContextOptions<LarpexDbContext> options) : base(options) { }


}
