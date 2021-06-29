using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CryptoRest.Library.Entities;
using CryptoRest.Library.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CryptoRest.Controllers
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
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            var rng = new Random();
            var request = new Request()
            {
                Url = "https://api.binance.com",
                Endpoint = "/api/v3/exchangeInfo",
                Params = new Dictionary<string, object>()
                {
                    ["key_param"] = "value_params",
                },
                Headers = new Dictionary<string, string>()
                {
                    ["key_header1"] = "value_header1",
                    ["key_header2"] = "value_header2"
                }
            };

            var http = new  HttpRequest();
            await http.GetAsync(request);
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
