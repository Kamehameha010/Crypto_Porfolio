using System.Collections.Generic;

namespace CryptoRest.Library.Entities
{

    public class Request
    {
        public string Url { get; set; }
        public string Endpoint { get; set; }
        public ApiBase Api { get; set; }
#nullable enable
        public Dictionary<string, object>? Params { get; set; }
        public Dictionary<string, string>? Headers { get; set; }
        
#nullable disable
    }



}
