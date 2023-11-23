using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblGame
{
    public int GameId { get; set; }

    public string GameName { get; set; } = null!;

    public string GameAuthor { get; set; } = null!;

    public string? GameDescription { get; set; }

    public string? GameScript { get; set; }

    public int? GameDifficulty { get; set; }

    public int? GameMaxNumberOfParticipants { get; set; }

    public virtual ICollection<TblCharacter> TblCharacters { get; set; } = new List<TblCharacter>();

    public virtual ICollection<TblEvent> TblEvents { get; set; } = new List<TblEvent>();
}
