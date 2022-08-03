using System.Data.SqlClient;
using System.Data;
using System;

// string queryString =
    // "INSERT INTO NBINFO VALUES (2,'Dell','Dell XPS 13 9310','2020','Intel i7 1185G7','Intel Iris Xe',16,'SSD',512,'IPS','1200p','16:10',13.4)";
// string connectionString = "Data Source=.\\TEW_SQLEXPRESS;Initial Catalog=notebookpicker;Integrated Security=True";
// using (SqlConnection connection = new SqlConnection(connectionString))
// {
//     SqlCommand command = new SqlCommand(queryString, connection);
//     connection.Open();
//     SqlDataReader reader = command.ExecuteReader();
// }

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
// builder.Services.AddTransient<>()
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
