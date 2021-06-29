using CryptoRest.Library.Entities;
using CryptoRest.Library.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CryptoRest.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BinanceController : ControllerBase
    {
        private readonly IHttpRequest _httpRequest;
        public BinanceController(IHttpRequest httpRequest)
        {
            _httpRequest = httpRequest;
        }
        [HttpPost]
        public async Task<IActionResult> WalletInfo([FromBody] Request request)
        {
            var reponse = await _httpRequest.GetAsync(request);
            return Ok(reponse);
        }
    }
}
