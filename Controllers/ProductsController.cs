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
        /// <param name="b">Brand</param>
        /// <param name="r">Release</param>
        /// <param name="c">CPU</param>
        /// <param name="g">GPU</param>
        /// <param name="st">Storage Type (StrType)</param>
        /// <param name="pt">Panel Type (PNType)</param>
        /// 
        /// <returns></returns>
        [HttpGet]
        public IEnumerable<Laptop> Get(string? b, string? r, string? c, 
            string? g, string? st, string? pt)
        {
            List<Laptop> Laptops = _context.Laptops
                .Include(l => l.Nbsellers).ToList();
            foreach (Laptop i in Laptops)
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
            }
            
            return Laptops;
        }
    }
}
