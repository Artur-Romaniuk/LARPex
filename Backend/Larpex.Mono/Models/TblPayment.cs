using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblPayment
{
    public string PaymentId { get; set; } = null!;

    public bool PaymentAccepted { get; set; }

    public decimal PaymentAmount { get; set; }

    public string PaymentType { get; set; } = null!;

    public int? UserId { get; set; }

    public virtual ICollection<TblOrder> TblOrders { get; set; } = new List<TblOrder>();

    public virtual TblUser? User { get; set; }
}
