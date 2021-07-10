using CryptoRest.Library.Config;
using CryptoRest.Library.Entities;
using CryptoRest.Library.Interfaces;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace CryptoRest.Library.Services
{
    public class HttpRequest : IHttpRequest
    {
        public async Task<object> GetAsync(string url, Dictionary<string, string>? headers)
        {

            using var clientRequest = new HttpClient();
            HttpRequestHeaders.SetHeaders(clientRequest, headers);
            using var req = await clientRequest.GetAsync(url);
            string apiResponse = await req.Content.ReadAsStringAsync();
            var response = JsonSerializer.Deserialize<object>(apiResponse);
            return response;
        }

        public Task<object> Post()
        {
            throw new System.NotImplementedException();
        }


    }
}
