﻿using Larpex.Shared.ModelDto;

namespace Larpex.Mono.Models;

public class GameDto
{
    public int GameId { get; set; }

    public string GameName { get; set; } = null!;

    public string GameAuthor { get; set; } = null!;

    public string? GameDescription { get; set; }

    public string? GameScript { get; set; }

    public int? GameDifficulty { get; set; }

    public int? GameMaxNumberOfParticipants { get; set; }

    public virtual ICollection<CharacterDto> TblCharacters { get; set; } = new List<CharacterDto>();

    public virtual ICollection<EventDto> TblEvents { get; set; } = new List<EventDto>();
}
