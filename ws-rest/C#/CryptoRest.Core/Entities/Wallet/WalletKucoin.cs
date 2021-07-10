using CryptoRest.Library.Constants;
using CryptoRest.Library.Interfaces;
using CryptoRest.Library.Services;
using CryptoRest.Library.Utility;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoRest.Library.Entities
{
    public class WalletKucoin : IWallet
    {

        private readonly IHttpRequest _httpRequest;
        private readonly ApiCredentialKucoin _credentials;
        private readonly Request _request;
        private readonly IEncryptHMAC _hmac;
        private string timestamp;

        public WalletKucoin(ApiCredentialKucoin credentials)
        {
            timestamp = new DateTimeOffset(DateTime.Now).ToUnixTimeMilliseconds().ToString();
            _credentials = credentials;
            _hmac = new EncryptHMAC();
            _httpRequest = new HttpRequest();

            _request = new Request
            {
                Url = APIConstants.KUCOIN_URL_BASE,
                Endpoint = APIConstants.KUCOIN_ACCOUNTS_ENDOINT,
                Headers = new Dictionary<string, string>
                {
                    [APIConstants.KC_API_KEY_HEADER] = _credentials.ApiKey,
                    [APIConstants.KC_API_TIMESTAMP_HEADER] = timestamp,
                    [APIConstants.KC_API_SIGN_HEADER] = _hmac.EncryptHMACSHA256($"{timestamp}GET{APIConstants.KUCOIN_ACCOUNTS_ENDOINT}", _credentials.ApiSecret, true),
                    [APIConstants.KC_API_PASSPHRASE_HEADER] = _hmac.EncryptHMACSHA256(_credentials.ApiPassphrase, _credentials.ApiSecret, true),
                    [APIConstants.KC_API_VERSION_HEADER] = "2"
                }

            };
        }

        public async Task<object> GetCapital()
        {
            var uri = UrlUtility.CreateUri(_request);
            var response = await _httpRequest.GetAsync(uri, _request.Headers);
            return response;
        }
    }
}
