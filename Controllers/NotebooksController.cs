using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using DotNetEnv;
using notebookpicker.Data;
using notebookpicker.Models;

namespace notebookpicker.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class NotebooksController : ControllerBase
    {
        private readonly ILogger<NotebooksController> _logger;
        private LaptopContext _context;

        public NotebooksController(ILogger<NotebooksController> logger, LaptopContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Laptop> Get()
        {
            List<Seller> Sellers = _context.Sellers.ToList();
            List<Laptop> Laptops =  _context.Laptops.ToList();
            foreach (Laptop i in Laptops)
            {
                if (i.Nbsellers.Count() == 0)
                {
                    i.minPrice = 0;
                }
                else
                {
                    i.minPrice = Decimal.MaxValue;
                    List<Seller> curList = i.Nbsellers.ToList();
                    foreach (Seller j in i.Nbsellers)
                    {
                        if (j.Price < i.minPrice)
                        {
                            i.minPrice = j.Price;
                        }
                    }
                }
                // var minPrice = _context.Sellers.Where(s=> s.Lpid == i.Id).Min(s => s.Price);
                // i.minPrice = minPrice == null ? 0 : minPrice;
            }
            return Laptops;
        }
    }
}
