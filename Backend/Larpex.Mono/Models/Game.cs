namespace Larpex.Mono.Models;

public class Game
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public ICollection<Participant> Participants { get; set; }
}
