using CryptoRest.Library.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoRest.Library.Interfaces
{
    public interface IHttpRequest
    {
        // TODO
        Task<Object> Post();
        Task<Object> GetAsync(string url, Dictionary<string, string> headers);
    }
}
