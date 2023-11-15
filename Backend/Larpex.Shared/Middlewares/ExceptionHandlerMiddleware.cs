using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net;


namespace Larpex.Shared.Middlewares;

public class ExceptionHandlerMiddleware
{
    private readonly ILogger<ExceptionHandlerMiddleware> _logger;
    private readonly RequestDelegate _next;

    public ExceptionHandlerMiddleware(
        ILogger<ExceptionHandlerMiddleware> logger,
        RequestDelegate next)
    {
        _logger = logger;
        _next = next;
    }

    // This method applies global try catch block for every endpoint in controllers
    // after injecting it in Program.cs file with
    // app.UseMiddleware<ExceptionHandlerMiddleware>();
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            var errorId = Guid.NewGuid();

            _logger.LogError(ex, $"{errorId} : {ex.Message}");

            httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            httpContext.Response.ContentType = "application/json";

            var error = new
            {
                Id = errorId,
                ErrorMessage = "Big oof"
            };

            await httpContext.Response.WriteAsJsonAsync(error);
        }
    }
}
