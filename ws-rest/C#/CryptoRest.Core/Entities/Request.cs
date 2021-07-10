using System.Collections.Generic;

namespace CryptoRest.Library.Entities
{
#nullable enable
    public class Request
    {

#pragma warning disable CS8618
        private string _Url;
        private string _Endpoint;
        private Dictionary<string, object>? _Params;
        private Dictionary<string, string> _Headers;


        /// <summary>
        /// Default Constructor
        /// </summary>
        public Request()

        {

        }
        /// <summary>
        /// Constructor with parameters
        /// </summary>
        /// <param name="url"></param>
        /// <param name="endpoint"></param>
        /// <param name="credentials"></param>
        /// <param name="parameters"></param>
        /// <param name="headers"></param>
        public Request(string url, string endpoint, Dictionary<string, object>? parameters, Dictionary<string, string> headers)
        {
            _Url = url;
            _Endpoint = endpoint;
            _Params = parameters;
            _Headers = headers;
        }

        /// <summary>
        /// Declare  Setters and Getters
        /// </summary>

        public string Url { get => _Url; set => _Url = value; }
        public string Endpoint { get => _Endpoint; set => _Endpoint = value; }
        public Dictionary<string, object>? Params { get => _Params; set => _Params = value; }
        public Dictionary<string, string> Headers { get => _Headers; set => _Headers = value; }
#pragma warning restore CS8618  
    }

#nullable disable


}
