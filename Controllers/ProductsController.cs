using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using notebookpicker.Data;
using notebookpicker.Models;

namespace notebookpicker.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;
        private LaptopContext _context;

        public ProductsController(ILogger<ProductsController> logger, 
            LaptopContext context)
        {
            _logger = logger;
            _context = context;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="br">Brand</param>
        /// <param name="rel">Release</param>
        /// <param name="cpu"></param>
        /// <param name="gpu"></param>
        /// <param name="strtype"></param>
        /// <param name="pantype"></param>
        /// <param name="resolu"></param>
        /// <param name="aspratio"></param>
        /// <param name="minsize"></param>
        /// <param name="maxsize"></param>
        /// <param name="minweight"></param>
        /// <param name="maxweight"></param>
        /// <param name="minmem">Minimum memory</param>
        /// <param name="maxmem">Maximum memory</param>
        /// <param name="minss">Minimum storage size</param>
        /// <param name="maxss">Maximum storage size</param>
        /// <param name="search">Query from search bar</param>
        /// <param name="minprice">Minimum price</param>
        /// <param name="maxprice">Maximum price</param>
        /// <returns>Enumerable of all qualifying items</returns>
        [HttpGet]
        // holy shit thats a lot of filters
        public IEnumerable<Laptop> Get(string? br, string? rel, string? cpu,
            string? gpu, string? strtype, string? pantype, string? resolu,
            string? aspratio, decimal? minsize, decimal? maxsize, 
            decimal? minweight, decimal? maxweight, 
            decimal? minmem, decimal? maxmem, decimal? minss, decimal? maxss, 
            string? search, decimal? minprice, decimal? maxprice)

        {
            IQueryable<Laptop> laptops = _context.Laptops.Include(l => l.Nbsellers).AsQueryable();
            // laptops = laptops.
            if (br != null)
            {
                List<string> brands = br.Split(',').ToList();
                laptops = laptops.Where(x => brands.Contains(x.Brand));
            }

            if (rel != null)
            {
                List<string> releases = rel.Split(',').ToList();
                laptops = laptops.Where(x => releases.Contains(x.Release));
            }

            if (cpu != null)
            {
                List<string> cpus = cpu.Split(',').ToList();
                laptops = laptops.Where(x => cpus.Contains(x.Cpu));
            }

            if (gpu != null)
            {
                List<string> gpus = gpu.Split(',').ToList();
                laptops = laptops.Where(x => gpus.Contains(x.Gpu));
            }
            
            if (strtype != null)
            {
                List<string> strtypes = strtype.Split(',').ToList();
                laptops = laptops.Where(x => strtypes.Contains(x.StrType));
            }
            
            if (pantype != null)
            {
                List<string> pantypes = pantype.Split(',').ToList();
                laptops = laptops.Where(x => pantypes.Contains(x.PanelType));
            }
            
            if (resolu != null)
            {
                List<string> resolutions = resolu.Split(',').ToList();
                laptops = laptops.Where(x => resolutions.Contains(x.Resolution));
            }
            
            if (aspratio != null)
            {
                List<string> aspratios = aspratio.Split(',').ToList();
                laptops = laptops.Where(x => aspratios.Contains(x.Aspratio));
            }
            
            if (minsize != null)
            {
                laptops = laptops.Where(x => x.Size >= minsize);
            }
            
            if (maxsize != null)
            {
                laptops = laptops.Where(x => x.Size <= maxsize);
            }
            
            if (minweight != null)
            {
                laptops = laptops.Where(x => x.Weight >= minweight);
            }
            
            if (maxweight != null)
            {
                laptops = laptops.Where(x => x.Weight <= maxweight);
            }
            
            if (minmem != null)
            {
                laptops = laptops.Where(x => x.Memory >= minmem);
            }
            
            if (maxmem != null)
            {
                laptops = laptops.Where(x => x.Memory <= maxmem);
            }
            
            if (minss != null)
            {
                laptops = laptops.Where(x => x.StrSize >= minss);
            }
            
            if (maxss != null)
            {
                laptops = laptops.Where(x => x.StrSize <= maxss);
            }

            if (maxprice != null)
            {
                laptops = laptops.Where(x => x.Nbsellers.Min(y => y.Price) <= maxprice);
            }

            if (minprice != null)
            {
                laptops = laptops.Where(x => x.Nbsellers.Min(y => y.Price) >= minprice);
            }

            if (search != null)
            {
                List<string> queries = search.ToLower().Split(' ').ToList();
                
                foreach (string i in queries)
                {
                    laptops = laptops = laptops.Where(x => x.Name.ToLower().Contains(i) || 
                        x.Brand.ToLower().Contains(i) || 
                        x.Cpu.ToLower().Contains(i) || 
                        x.Gpu.ToLower().Contains(i) || 
                        x.Release.ToLower().Contains(i));
                }
            }

            return laptops;
        }
    }
}
