using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblPayment
{
    public string PaymentId { get; set; }

    public bool PaymentAccepted { get; set; }

    public decimal PaymentAmount { get; set; }

    public string PaymentType { get; set; } = null!;

    public string? OrderId { get; set; }

    public int? UserId { get; set; }

    public virtual TblOrder? TblOrder { get; set; }

    public virtual TblUser? User { get; set; }
}
