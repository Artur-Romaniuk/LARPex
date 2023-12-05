using Larpex.Mono.Extensions;
using Larpex.Mono.Models;
using Larpex.Shared.Middlewares;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Stripe;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials(); 
        });
});
builder.Services.AddDbContext<LarpexDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


// Dependency injection services here
builder.Services.AddTransients();
builder.Services.AddSigleton();
builder.Services.AddHttpContextAccessor();

/*
Stripe.StripeConfiguration.ApiKey = "pk_test_51OHojyBOOzQupZscYEIAo69bhrWJMpSDAF67xWvDzpmCYr8jwt7V6a8FxLzxtx1lT5jOG5difuHkJzGpMjM4j66r00WpCRVgNq";*/
//GetSection("Stripe:SecretKey").Get<string>();

var app = builder.Build();

// Configure the HTTP request pipeline.


app.UseSwagger();
app.UseSwaggerUI();




app.UseHsts();
app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");

app.UseMiddleware<ExceptionHandlerMiddleware>();


app.UseAuthorization();

var imagesDirectory = Path.Combine(Directory.GetCurrentDirectory(), "Images");
if (!Directory.Exists(imagesDirectory))
{
    Directory.CreateDirectory(imagesDirectory);
}

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(imagesDirectory),
    RequestPath = "/Images"
});

app.MapControllers();

app.Run();
