namespace notebookpicker.Models
{
    public class Laptop
    {
        public string Id { get; set; }

        public string Brand { get; set; }

        public string Name { get; set; }

        public string Release { get; set; }

        public string Cpu { get; set; }

        public string Gpu { get; set; }

        public decimal Memory { get; set; }

        public string StrType { get; set; }

        public decimal StrSize { get; set; }

        public string PanelType { get; set; }

        public string Resolution { get; set; }

        public string AspRatio { get; set; }

        public decimal Size { get; set; }

        public decimal Weight { get; set; }
        
        public string ImgP { get; set; }
        
        public decimal MinPrice { get; set; }
    }
}