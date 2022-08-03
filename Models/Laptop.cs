using System;
using System.Collections.Generic;

namespace notebookpicker.Models
{
    public partial class Laptop
    {
        public string Lpid { get; set; } = null!;
        public string? Brand { get; set; }
        public string? Release { get; set; }
        public string? Cpu { get; set; }
        public string? Gpu { get; set; }
        public string? Strtype { get; set; }
        public string? Pntype { get; set; }
        public string? Resolu { get; set; }
        public string? Aspratio { get; set; }
        public decimal? Sz { get; set; }
        public decimal? Weight { get; set; }
        public decimal? Mem { get; set; }
        public decimal? Strsize { get; set; }
        public string? Name { get; set; }
        public string? ImgP { get; set; }

        public virtual Img Img { get; set; } = null!;
    }
}
