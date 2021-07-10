using CryptoRest.Library.Entities;
using CryptoRest.Library.Entities.Wallet;
using CryptoRest.Library.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CryptoRest.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class WalletController : ControllerBase
    {
        private readonly IHttpRequest _httpRequest;
        private IWallet _wallet;
        public WalletController(IHttpRequest httpRequest)
        {
            _httpRequest = httpRequest;
        }
        [HttpPost("binance")]
        public async Task<IActionResult> WalletBinanceInfo([FromBody] ApiCredentialBase credentials)
        {
            _wallet = new WalletBinance(credentials);
            return Ok(await _wallet.GetCapital());
        }

        [HttpPost("Kucoin")]
        public async Task<IActionResult> WalletKucoinInfo([FromBody] ApiCredentialKucoin credentials)
        {
            _wallet = new WalletKucoin(credentials);
            return Ok(await _wallet.GetCapital());
        }
    }
}
