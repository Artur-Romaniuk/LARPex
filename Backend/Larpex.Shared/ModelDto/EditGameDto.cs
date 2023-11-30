namespace Larpex.Mono.Models;

public class EditGameDto
{
    public int GameId { get; set; }

    public string GameName { get; set; } = null!;

    public string GameAuthor { get; set; } = null!;

    public string? GameDescription { get; set; }

    public string? GameScript { get; set; }

    public int? GameDifficulty { get; set; }

    public int? GameMaxNumberOfParticipants { get; set; }
}
