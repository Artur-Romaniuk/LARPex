using Larpex.Mono.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto;

public class CharacterDto
{
    public int CharacterId { get; set; }

    public string CharacterName { get; set; } = null!;

    public string? CharacterClass { get; set; }

    public string? CharacterRace { get; set; }

    public string? CharacterLore { get; set; }

    public int? GameId { get; set; }

    public virtual GameDto? Game { get; set; }

    public virtual ParticipantDto? TblParticipant { get; set; }
}
