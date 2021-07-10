using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CryptoRest.Library.Interfaces
{
    public interface IWallet
    {
        Task<object> GetCapital();
    }
}
