using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblOrder
{
    public string OrderId { get; set; }

    public decimal OrderAmount { get; set; }

    public string PaymentId { get; set; }

    public virtual TblEvent? TblEvent { get; set; }

    public virtual TblPayment? Payment { get; set; }
    public virtual ICollection<TblPayment> TblPayments { get; set; } = new List<TblPayment>();
}
