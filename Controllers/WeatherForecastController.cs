using Microsoft.AspNetCore.Mvc;

namespace notebookpicker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Laptop> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Laptop
            {
                ID = 69,
                Name = "testName",
                Release = "420",
                CPU = "ur mom",
                GPU = "ur dad",
                Memory = 420,
                StrType = "HDD",
                StrSize = 69420,
                PanelType = "TN",
                Resolution = "480p",
                AspRatio = "16:9",
                Size = 15.6
            })
            .ToArray();
        }
    }
}