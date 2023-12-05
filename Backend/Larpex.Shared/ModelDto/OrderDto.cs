using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Larpex.Shared.ModelDto
{
    public class OrderDto
    {
        public string OrderId {  get; set; }
        public string PaymentId { get; set; }
        public decimal OrderAmount { get; set; }


/*
        public string OrderId { get; set; }

        public decimal OrderAmount { get; set; }

        public string PaymentId { get; set; }

        public virtual TblEvent? TblEvent { get; set; }

        public virtual TblPayment? Payment { get; set; }
        public virtual ICollection<TblPayment> TblPayments { get; set; } = new List<TblPayment>();*/
    }
}
