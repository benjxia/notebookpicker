using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace notebookpicker.Models
{
    public partial class Laptop
    {
        public Laptop()
        {
            Imgs = new HashSet<Img>();
            Nbsellers = new HashSet<Seller>();
        }

        public string Id { get; set; } = null!;
        public string? Brand { get; set; }
        public string? Release { get; set; }
        public string? Cpu { get; set; }
        public string? Gpu { get; set; }
        public string? StrType { get; set; }
        public string? PanelType { get; set; }
        public string? Resolution { get; set; }
        public string? Aspratio { get; set; }
        public decimal? Size { get; set; }
        public decimal? Weight { get; set; }
        public decimal? Memory { get; set; }
        public decimal? StrSize { get; set; }
        public string? Name { get; set; }
        public string? ImgP { get; set; }
        [NotMapped]
        public decimal? MinPrice { get; set; } = 0;
        public virtual ICollection<Img> Imgs { get; set; }
        public virtual ICollection<Seller> Nbsellers { get; set; }
    }
}