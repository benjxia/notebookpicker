using System;
using System.Collections.Generic;

namespace notebookpicker.Models
{
    public partial class Img
    {
        // Laptop ID
        public string? Lpid { get; set; }
        // Image source
        public string? Src { get; set; }
        // Image ID
        public string Id { get; set; } = null!;
        // Laptop image belongs to
        public virtual Laptop? Lp { get; set; }
    }
}
