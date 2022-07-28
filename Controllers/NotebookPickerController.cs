using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using DotNetEnv;

namespace notebookpicker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotebookPickerController : ControllerBase
    {
        private readonly ILogger<NotebookPickerController> _logger;

        public NotebookPickerController(ILogger<NotebookPickerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Laptop> Get()
        {
            DotNetEnv.Env.Load();
            OracleConnection oconn = new OracleConnection();
            oconn.ConnectionString = Environment.GetEnvironmentVariable("CONNSTR");
            OracleCommand cmd = new OracleCommand("SELECT * FROM NBINFO", oconn);
            oconn.Open();
            OracleDataReader rdr = cmd.ExecuteReader();
            Console.WriteLine(rdr.FieldCount);
            List<Laptop> output = new List<Laptop>();
            try {
                while (rdr.Read()) {
                    output.Add(new Laptop {
                        ID = (string)rdr["LPID"],
                        Name = (string)rdr["NAME"],
                        Brand = (string)rdr["BRAND"],
                        Release = (string)rdr["RELEASE"],
                        CPU = (string)rdr["CPU"],
                        GPU = (string)rdr["GPU"],
                        Memory = (decimal)rdr["MEM"],
                        StrType = (string)rdr["STRTYPE"],
                        StrSize = (decimal)rdr["STRSIZE"],
                        PanelType = (string)rdr["PNTYPE"],
                        Resolution = (string)rdr["RESOLU"],
                        AspRatio = (string)rdr["ASPRATIO"],
                        Size = (decimal)rdr["SZ"],
                        Weight = (decimal)rdr["WEIGHT"]
                    });
                 }
            }
            finally {
                rdr.Close();
            }
            
            // string connectionString = "Data Source=.\\TEW_SQLEXPRESS;Initial Catalog=notebookpicker;Integrated Security=True";
            // string queryString = "SELECT * FROM NBINFO";

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