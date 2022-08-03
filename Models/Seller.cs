using System;
using System.Collections.Generic;

namespace notebookpicker.Models
{
    public partial class Seller
    {
        public string Lpid { get; set; } = null!;
        public decimal? Price { get; set; }
        public string? Sellername { get; set; }
        public string? Url { get; set; }

        public virtual Laptop Lp { get; set; } = null!;
    }
}
