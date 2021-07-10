using CryptoRest.Library.Interfaces;
using System;
using System.Security.Cryptography;
using System.Text;

namespace CryptoRest.Library.Services
{
    public class EncryptHMAC : IEncryptHMAC
    {

        public string EncryptHMACSHA256(string message, string api, bool isBase64 = false)
        {
            byte[] key = Encoding.UTF8.GetBytes(api);

            using HMACSHA256 hmac = new HMACSHA256(key);
            var encrypt = hmac.ComputeHash(Encoding.UTF8.GetBytes(message));

            return isBase64 ? Convert.ToBase64String(encrypt) : BitConverter.ToString(encrypt).Replace("-", string.Empty);
        }
    }
}
