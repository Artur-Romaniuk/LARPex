using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Models;

public class GameGetDto
{
    public int GameId { get; set; }

    public string GameName { get; set; } = null!;

    public string GameAuthor { get; set; } = null!;

    public string? GameDescription { get; set; }

    public string? GameScript { get; set; }

    public int? GameDifficulty { get; set; }

    public int? GameMaxNumberOfParticipants { get; set; }

    public virtual ICollection<GameCharacterDto> Characters { get; set; } = new List<GameCharacterDto>();
}
