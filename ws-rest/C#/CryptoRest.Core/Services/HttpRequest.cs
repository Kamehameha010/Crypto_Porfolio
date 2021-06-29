using CryptoRest.Library.Entities;
using CryptoRest.Library.Interfaces;
using CryptoRest.Library.Utility;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace CryptoRest.Library.Services
{
    public class HttpRequest : IHttpRequest
    {
        public async Task<object> GetAsync(Request request)
        {

            var response = new object();

            using var clientRequest = new HttpClient();
            SetHeaders(in clientRequest, request.Headers);
            
            using var req = await clientRequest.GetAsync(UrlUtility.CreateUri(request));
            string apiResponse = await req.Content.ReadAsStringAsync();
            
            response = JsonSerializer.Deserialize<object>(apiResponse);
            
            return response;
        }

        public Task<object> Post()
        {
            throw new System.NotImplementedException();
        }

        private void SetHeaders(in HttpClient httpClient, IDictionary<string, string> headers)
        {
            foreach (var header in headers)
            {
                httpClient.DefaultRequestHeaders.Add(header.Key, header.Value);
            }
        }
    }
}
