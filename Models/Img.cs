using System;
using System.Collections.Generic;

namespace notebookpicker.Models
{
    public partial class Img
    {
        public string Lpid { get; set; } = null!;
        public string? Src { get; set; }

        public virtual Laptop Lp { get; set; } = null!;
    }
}
