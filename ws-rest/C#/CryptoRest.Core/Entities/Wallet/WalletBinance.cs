using CryptoRest.Library.Constants;
using CryptoRest.Library.Interfaces;
using CryptoRest.Library.Services;
using CryptoRest.Library.Utility;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoRest.Library.Entities.Wallet
{
    public class WalletBinance : IWallet
    {

        private readonly IHttpRequest _httpRequest;
        private readonly ApiCredentialBase _credentials;
        private readonly Request _request;
        private string timestamp;


        public WalletBinance(ApiCredentialBase credentials)
        {
            timestamp = new DateTimeOffset(DateTime.Now).ToUnixTimeMilliseconds().ToString();
            _credentials = credentials;
            _httpRequest = new HttpRequest();

            _request = new Request
            {
                Url = APIConstants.BINANCE_URL_BASE,
                Endpoint = APIConstants.BINANCE_CAPITAL_ENDOINT,
                Params = new Dictionary<string, object>
                {
                    ["recvWindow"] = 60000,
                    ["timestamp"] = timestamp
                },
                Headers = new Dictionary<string, string>
                {
                    [APIConstants.X_MBX_APIKEY_HEADER] = _credentials.ApiKey,
                },
            };

        }

        public async Task<object> GetCapital()
        {
            var uri = UrlUtility.CreateUri(_request, _credentials.ApiSecret);
            var response = await _httpRequest.GetAsync(uri, _request.Headers);
            return response;
        }


    }
}
