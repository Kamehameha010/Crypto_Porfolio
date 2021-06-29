using CryptoRest.Library.Entities;
using CryptoRest.Library.Services;
using System;
using System.Collections.Generic;

namespace CryptoRest.Library.Utility
{
    public class UrlUtility
    {
        readonly static EncryptHMAC _hmac = new EncryptHMAC();

        public static string CreateUri(Request request)
        {
            return new UriBuilder(request.Url)
            {
                Path = request.Endpoint,
                Query = QueryString(request.Params, request.Api)
            }.ToString();
        }
        public static string QueryString(IDictionary<string, object> parameters, ApiBase api)
        {
            var listParams = new List<string>();
            foreach (var property in parameters)
            {
                listParams.Add($"{property.Key}={property.Value}");
            }
            var queryString = String.Join("&", listParams);
            
            return string.Concat(queryString, "&signature=", _hmac.EncryptHMACSHA256(queryString, api.ApiSecret));
        }
    }
}
