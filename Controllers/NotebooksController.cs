using Microsoft.AspNetCore.Mvc;
using Oracle.ManagedDataAccess.Client;
using DotNetEnv;

using notebookpicker.Models;

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
        //     DotNetEnv.Env.Load(); // Necessary line or it won't connect to DB
        //     OracleConnection oconn = new OracleConnection();
        //     oconn.ConnectionString = Environment.GetEnvironmentVariable("CONNSTR_ALT");
        //     OracleCommand cmd = new OracleCommand("SELECT * FROM NBINFO", oconn);
        //     oconn.Open();
        //     OracleDataReader rdr = cmd.ExecuteReader();
        List<Laptop> output = new List<Laptop>();
            //     try {
        //         while (rdr.Read()) {
        //             output.Add(new Laptop {
        //                 ID = (string)rdr["LPID"],
        //                 Name = (string)rdr["NAME"],
        //                 Brand = (string)rdr["BRAND"],
        //                 Release = (string)rdr["RELEASE"],
        //                 CPU = (string)rdr["CPU"],
        //                 GPU = (string)rdr["GPU"],
        //                 Memory = (int)rdr["MEM"],
        //                 StrType = (string)rdr["STRTYPE"],
        //                 StrSize = (decimal)rdr["STRSIZE"],
        //                 PanelType = (string)rdr["PNTYPE"],
        //                 Resolution = (string)rdr["RESOLU"],
        //                 AspRatio = (string)rdr["ASPRATIO"],
        //                 Size = (decimal)rdr["SZ"],
        //                 Weight = (decimal)rdr["WEIGHT"],
        //                 ImgP = DBNull.Value.Equals(rdr["IMG_P"]) ? "" : (string)rdr["IMG_P"]
        //             });
        //         }
        //     }
        //     finally {
        //         rdr.Close();
        //     }
        LaptopContext lc = new LaptopContext();
        var ls = lc.Nbinfos.ToList();
        foreach (var i in ls)
        {
            output.Add(i);
        }
            return output;
        }
    }
}