namespace Larpex.Mono.Models;

public class GameDto
{
    public int Id { get; set; }
    public int EventId { get; set; }
    public ICollection<ParticipantDto> Participants { get; set; }
}
