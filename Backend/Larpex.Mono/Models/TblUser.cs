using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblUser
{
    public int UserId { get; set; }

    public string UserUsername { get; set; } = null!;

    public byte[] UserPassword { get; set; } = null!;

    public string UserEmail { get; set; } = null!;

    public string? UserFirstName { get; set; }

    public string? UserLastName { get; set; }

    public DateTime? UserBirthDay { get; set; }

    public virtual ICollection<TblParticipant> TblParticipants { get; set; } = new List<TblParticipant>();
}
