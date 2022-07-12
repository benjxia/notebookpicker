using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System;

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
            string connectionString = "Data Source=.\\TEW_SQLEXPRESS;Initial Catalog=notebookpicker;Integrated Security=True";
            string queryString = "SELECT * FROM NBINFO";
            List<Laptop> output = new List<Laptop>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                
                try
                {
                    while (reader.Read())
                    {
                        output.Add(new Laptop {
                            ID = (long)reader["ID"],
                            Brand = (string)reader["BRAND"],
                            Name = (string)reader["NAME"],
                            Release = (string)reader["RELEASE"],
                            CPU = (string)reader["CPU"],
                            GPU = (string)reader["GPU"],
                            Memory = (int)reader["MEM"],
                            StrType = (string)reader["STRTYPE"],
                            StrSize = (int)reader["STRSIZE"],
                            PanelType = (string)reader["PNTYPE"],
                            Resolution = (string)reader["RESOLU"],
                            AspRatio = (string)reader["ASPRATIO"],
                            Size = (double)reader["SIZE"]
                        });
                    }
                }
                finally
                {
                    reader.Close();
                }
            }
            return output;
        }
    }
}