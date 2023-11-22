using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblParticipant
{
    public int ParticipantId { get; set; }

    public int? CharacterId { get; set; }

    public int? EventId { get; set; }

    public int? UserId { get; set; }

    public virtual TblCharacter? Character { get; set; }

    public virtual TblEvent? Event { get; set; }

    public virtual TblUser? User { get; set; }
}
