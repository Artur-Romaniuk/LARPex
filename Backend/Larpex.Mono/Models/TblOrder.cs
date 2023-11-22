using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblOrder
{
    public int OrderId { get; set; }

    public decimal OrderAmount { get; set; }

    public int? PaymentId { get; set; }

    public virtual TblPayment? Payment { get; set; }

    public virtual ICollection<TblEvent> TblEvents { get; set; } = new List<TblEvent>();
}
