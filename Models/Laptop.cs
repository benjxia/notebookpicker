using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace notebookpicker.Models
{
    public partial class Laptop
    {
        public Laptop()
        {
            Imgs = new HashSet<Img>();
            Nbsellers = new HashSet<Seller>();
        }

        // Laptop ID (DB Primary key)
        public string Id { get; set; } = null!;
        public string? Brand { get; set; }
        // Release year
        public string? Release { get; set; }
        public string? Cpu { get; set; }
        public string? Gpu { get; set; }
        public string? StrType { get; set; }
        // Screen panel type
        public string? PanelType { get; set; }
        // Screen resolution
        public string? Resolution { get; set; }
        // Aspect ratio
        public string? Aspratio { get; set; }
        public decimal? Size { get; set; }
        // Laptop weight
        public decimal? Weight { get; set; }
        // Memory size (RAM size)
        public decimal? Memory { get; set; }
        // Storage size
        public decimal? StrSize { get; set; }
        // Laptop name ex. Dell XPS 13 9310
        public string? Name { get; set; }
        // Primary image (displayed on filtering table)
        public string? ImgP { get; set; }
        public virtual ICollection<Img> Imgs { get; set; }
        public virtual ICollection<Seller> Nbsellers { get; set; }
        
    }
}