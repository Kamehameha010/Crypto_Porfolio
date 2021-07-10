using System;
using System.Collections.Generic;
using System.Text;

namespace CryptoRest.Library.Constants
{
    public sealed class APIConstants
    {
        public const string X_MBX_APIKEY_HEADER = "X-MBX-APIKEY";
        public const string KC_API_KEY_HEADER = "KC-API-KEY";
        public const string KC_API_SIGN_HEADER = "KC-API-SIGN";
        public const string KC_API_TIMESTAMP_HEADER = "KC-API-TIMESTAMP";
        public const string KC_API_PASSPHRASE_HEADER = "KC-API-PASSPHRASE";
        public const string KC_API_VERSION_HEADER = "KC-API-KEY-VERSION";
        public const string KUCOIN_URL_BASE = "https://api.kucoin.com";
        public const string BINANCE_URL_BASE = "https://api.binance.com";
        public const string BINANCE_CAPITAL_ENDOINT = "/sapi/v1/capital/config/getall";
        public const string KUCOIN_ACCOUNTS_ENDOINT = "/api/v1/accounts";
    }

}