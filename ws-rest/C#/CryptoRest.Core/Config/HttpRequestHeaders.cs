using CryptoRest.Library.Constants;
using CryptoRest.Library.Entities;
using CryptoRest.Library.Services;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;

namespace CryptoRest.Library.Config
{


    public class HttpRequestHeaders
    {
        public static void SetHeaders(in HttpClient httpClient, Dictionary<string, string> paramaters)
        {

            foreach (var param in paramaters)
            {
                httpClient.DefaultRequestHeaders.Add(param.Key, param.Value);
            }
        }
    }



}

