using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using DotNetEnv;

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
            DotNetEnv.Env.Load();
            OracleConnection oconn = new OracleConnection();
            oconn.ConnectionString = Environment.GetEnvironmentVariable("CONNSTR");
            oconn.Open();
            OracleCommand cmd = new OracleCommand("SELECT * FROM NBINFO", oconn);
            OracleDataReader rdr = cmd.ExecuteReader();
            Console.WriteLine(rdr.FieldCount);
            // string connectionString = "Data Source=.\\TEW_SQLEXPRESS;Initial Catalog=notebookpicker;Integrated Security=True";
            // string queryString = "SELECT * FROM NBINFO";
            List<Laptop> output = new List<Laptop>();
            // using (SqlConnection connection = new SqlConnection(connectionString))
            // {
            //     SqlCommand command = new SqlCommand(queryString, connection);
            //     connection.Open();
            //     SqlDataReader reader = command.ExecuteReader();
            //     
            //     try
            //     {
            //         while (reader.Read())
            //         {
            //             output.Add(new Laptop {
            //                 ID = (long)reader["ID"],
            //                 Brand = (string)reader["BRAND"],
            //                 Name = (string)reader["NAME"],
            //                 Release = (string)reader["RELEASE"],
            //                 CPU = (string)reader["CPU"],
            //                 GPU = (string)reader["GPU"],
            //                 Memory = (int)reader["MEM"],
            //                 StrType = (string)reader["STRTYPE"],
            //                 StrSize = (int)reader["STRSIZE"],
            //                 PanelType = (string)reader["PNTYPE"],
            //                 Resolution = (string)reader["RESOLU"],
            //                 AspRatio = (string)reader["ASPRATIO"],
            //                 Size = (double)reader["SIZE"]
            //                 // TODO: add weight?
            //             });
            //         }
            //     }
            //     finally
            //     {
            //         reader.Close();
            //     }
            // }
            return output;
        }
    }
}