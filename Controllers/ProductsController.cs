using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using DotNetEnv;
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
        /// <param name="br"></param>
        /// <param name="rel"></param>
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
        /// <param name="minmem"></param>
        /// <param name="maxmem"></param>
        /// <param name="minss"></param>
        /// <param name="maxss"></param>
        /// <param name="name"></param>
        /// <param name="minprice"></param>
        /// <param name="maxprice"></param>
        /// <returns></returns>
        [HttpGet]
        // holy shit thats a lot of filters
        public IEnumerable<Laptop> Get(string? br, string? rel, string? cpu,
            string? gpu, string? strtype, string? pantype, string? resolu,
            string? aspratio, decimal? minsize, decimal? maxsize, 
            decimal? minweight, decimal? maxweight, 
            decimal? minmem, decimal? maxmem, decimal? minss, decimal? maxss, 
            string? name, decimal? minprice, decimal? maxprice)

        {
            IQueryable<Laptop> laptops = _context.Laptops.Include(l => l.Nbsellers).AsQueryable();

            if (br != null)
            {
                laptops = laptops.Where(x => x.Brand == br);
            }

            if (rel != null)
            {
                laptops = laptops.Where(x => x.Release == rel);
            }

            if (cpu != null)
            {
                laptops = laptops.Where(x => x.Cpu == cpu);
            }
            
            if (cpu != null)
            {
                laptops = laptops.Where(x => x.Cpu == cpu);
            }
            
            if (gpu != null)
            {
                laptops = laptops.Where(x => x.Gpu == gpu);
            }
            
            if (strtype != null)
            {
                laptops = laptops.Where(x => x.StrType == strtype);
            }
            
            if (pantype != null)
            {
                laptops = laptops.Where(x => x.PanelType == pantype);
            }
            
            if (resolu != null)
            {
                laptops = laptops.Where(x => x.Resolution == resolu);
            }
            
            if (aspratio != null)
            {
                laptops = laptops.Where(x => x.Aspratio == aspratio);
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
            
            // TODO: name filtering

            List<Laptop> output = laptops.ToList();
            foreach (Laptop i in output.ToList())
            {
                // Do manual price filtering here somewhere
                if (i.Nbsellers.Count() > 0)
                {
                    // Get minimum price for each product
                    i.MinPrice = Decimal.MaxValue;
                    foreach (Seller j in i.Nbsellers)
                    {
                        if (j.Price < i.MinPrice)
                        {
                            i.MinPrice = j.Price;
                        }
                    }
                }

                if (minprice != null && (i.MinPrice < minprice || i.MinPrice == 0))
                {
                    output.Remove(i);
                    continue;
                }

                if (maxprice != null && (i.MinPrice > maxprice || i.MinPrice == 0))
                {
                    output.Remove(i);
                }
            }

            return output;
        }
    }
}
