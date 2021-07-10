using CryptoRest.Library.Entities;
using CryptoRest.Library.Services;
using System;
using System.Collections.Generic;

namespace CryptoRest.Library.Utility
{
    public class UrlUtility
    {
        static readonly EncryptHMAC _hmac = new EncryptHMAC();

        public static string CreateUri(Request request, string secret = "")
        {
            return new UriBuilder(request.Url)
            {
                Path = request.Endpoint,
                Query = request.Params != null ? QueryString(request.Params, secret) : ""
            }.ToString();
        }
        public static string QueryString(IDictionary<string, object> parameters, string secret = "")
        {
            var listParams = new List<string>();
            foreach (var property in parameters)
            {
                listParams.Add($"{property.Key}={property.Value}");
            }
            var queryString = String.Join("&", listParams);
            return String.IsNullOrEmpty(secret) ? queryString : string.Concat(queryString, "&signature=", _hmac.EncryptHMACSHA256(queryString, secret));
        }
    }
}
