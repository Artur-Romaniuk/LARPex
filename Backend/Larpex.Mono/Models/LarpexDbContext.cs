using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Models;

public class LarpexDbContext : DbContext
{
    public DbSet<Event> Events { get; set; }
    public DbSet<Game> Games { get; set; }
    public DbSet<Participant> Participants { get; set; }

    public LarpexDbContext(DbContextOptions<LarpexDbContext> options) : base(options) { }


}
