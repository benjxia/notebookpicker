using System;
using System.Collections.Generic;

namespace notebookpicker.Models
{
    public partial class Img
    {
        public string? Lpid { get; set; }
        public string? Src { get; set; }
        public string Id { get; set; } = null!;
        public virtual Laptop? Lp { get; set; }
    }
}
