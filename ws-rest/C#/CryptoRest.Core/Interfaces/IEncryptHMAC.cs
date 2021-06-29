using System;

namespace CryptoRest.Library.Interfaces
{
    public interface IEncryptHMAC
    {
        String EncryptHMACSHA256(string phrase, string api, bool isBase64 = false);
    }
}
