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
            List<Laptop> Laptops =  _context.Laptops.ToList();
            foreach (Laptop i in Laptops)
            {
                var minPrice = _context.Sellers.Where(s=> s.Lpid == i.Id).Min(s => s.Price);
                i.minPrice = minPrice == null ? 0 : minPrice;
            }
            return Laptops;
        }
    }
}
