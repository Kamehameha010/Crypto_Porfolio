using CryptoRest.Library.Entities;
using System;
using System.Threading.Tasks;

namespace CryptoRest.Library.Interfaces
{
    public interface IHttpRequest
    {
        // TODO
        Task<Object> Post();
        Task<Object> GetAsync(Request request);
    }
}
