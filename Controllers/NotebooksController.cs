using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using notebookpicker.Models;
using DotNetEnv;

namespace notebookpicker.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class NotebooksController : ControllerBase
    {
        private readonly ILogger<NotebooksController> _logger;

        public NotebooksController(ILogger<NotebooksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Laptop> Get()
        {
            DotNetEnv.Env.Load(); // Necessary line or it won't connect to DB
            OracleConnection oconn = new OracleConnection();
            oconn.ConnectionString = Environment.GetEnvironmentVariable("CONNSTR");
            OracleCommand sel = new OracleCommand("SELECT * FROM NBINFO", oconn);
            oconn.Open();
            OracleDataReader rdr = sel.ExecuteReader();
            List<Laptop> output = new List<Laptop>();
            try {
                while (rdr.Read()) {
                    OracleCommand seller = new OracleCommand($"SELECT MIN(PRICE) AS PRICE FROM NBSELLER WHERE LPID = {rdr["LPID"]}", oconn);
                    OracleDataReader rdr2 = seller.ExecuteReader();
                    rdr2.Read();
                    output.Add(new Laptop {
                        Id = (string)rdr["LPID"],
                        Name = (string)rdr["NAME"],
                        Brand = (string)rdr["BRAND"],
                        Release = (string)rdr["RELEASE"],
                        Cpu = (string)rdr["CPU"],
                        Gpu = (string)rdr["GPU"],
                        Memory = (decimal)rdr["MEM"],
                        StrType = (string)rdr["STRTYPE"],
                        StrSize = (decimal)rdr["STRSIZE"],
                        PanelType = (string)rdr["PNTYPE"],
                        Resolution = (string)rdr["RESOLU"],
                        AspRatio = (string)rdr["ASPRATIO"],
                        Size = (decimal)rdr["SZ"],
                        Weight = (decimal)rdr["WEIGHT"],
                        ImgP = DBNull.Value.Equals(rdr["IMG_P"]) ? "" : (string)rdr["IMG_P"],
                        MinPrice = !rdr2.HasRows || DBNull.Value.Equals(rdr2["PRICE"]) ? 0 : (decimal)rdr2["PRICE"]
                    });
                    rdr2.Close();
                }
            }
            finally {
                rdr.Close();
            }
            return output;
        }
    }
}