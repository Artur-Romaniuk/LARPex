using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblCharacter
{
    public int CharacterId { get; set; }

    public string CharacterName { get; set; } = null!;

    public string? CharacterClass { get; set; }

    public string? CharacterRace { get; set; }

    public string? CharacterLore { get; set; }

    public int? GameId { get; set; }

    public virtual TblGame? Game { get; set; }

    public virtual ICollection<TblParticipant> TblParticipants { get; set; } = new List<TblParticipant>();
}
