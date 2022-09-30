using System;
using System.Collections.Generic;

namespace notebookpicker.Models
{
    public partial class Seller
    {
        // ID of laptop current seller is for
        public string Lpid { get; set; } = null!;
        public decimal? Price { get; set; }
        public string? Sellername { get; set; }
        public string? Url { get; set; }
        // Listing ID
        public string Id { get; set; } = null!;
        // Seller logo
        public string? Img { get; set; }
        // Laptop seller listing belongs to
        public virtual Laptop Lp { get; set; } = null!;
    }
}
