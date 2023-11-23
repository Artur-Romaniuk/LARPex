using System;
using System.Collections.Generic;

namespace Larpex.Mono.Models;

public partial class TblPayment
{
    public int PaymentId { get; set; }

    public bool PaymentAccepted { get; set; }

    public virtual TblOrder? TblOrder { get; set; }
}
