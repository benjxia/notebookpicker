using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using notebookpicker.Data;
using notebookpicker.Models;
using System;
namespace notebookpicker.Controllers;

[ApiController]
[Route("api/product")]
public class IndividualController : ControllerBase
{
    private readonly ILogger<IndividualController> _logger;
    private LaptopContext _context;

    public IndividualController(ILogger<IndividualController> logger,
        LaptopContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet]
    public Laptop Get(string id)
    {
        return _context.Laptops.Include(l => l.Nbsellers).Include(l => l.Imgs)
            .Where(x => x.Id == id).FirstOrDefault();
    }
    
}