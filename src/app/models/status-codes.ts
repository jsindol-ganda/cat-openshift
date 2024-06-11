export const HttpInformation = 
[
  {
    "code": 100,
    "description": "Continue",
    "category": "Informational",
    "meaning": "The server has received the request headers and the client should proceed to send the request body."
  },
  {
    "code": 101,
    "description": "Switching Protocols",
    "category": "Informational",
    "meaning": "The requester has asked the server to switch protocols."
  },
  {
    "code": 102,
    "description": "Processing",
    "category": "Informational",
    "meaning": "The server has received and is processing the request, but no response is available yet."
  },
  {
    "code": 103,
    "description": "Early Hints",
    "category": "Informational",
    "meaning": "The server is likely to send a final response with the header fields included in the informational response."
  },
  {
    "code": 200,
    "description": "OK",
    "category": "Success",
    "meaning": "The request has succeeded."
  },
  {
    "code": 201,
    "description": "Created",
    "category": "Success",
    "meaning": "The request has been fulfilled, and a new resource is created."
  },
  {
    "code": 202,
    "description": "Accepted",
    "category": "Success",
    "meaning": "The request has been accepted for processing, but the processing has not been completed."
  },
  {
    "code": 203,
    "description": "Non-Authoritative Information",
    "category": "Success",
    "meaning": "The server is a transforming proxy that received a 200 OK from its origin but is returning a modified version of the origin's response."
  },
  {
    "code": 204,
    "description": "No Content",
    "category": "Success",
    "meaning": "The server successfully processed the request and is not returning any content."
  },
  {
    "code": 205,
    "description": "Reset Content",
    "category": "Success",
    "meaning": "The server successfully processed the request, but is not returning any content. The client should reset the document view."
  },
  {
    "code": 206,
    "description": "Partial Content",
    "category": "Success",
    "meaning": "The server is delivering only part of the resource due to a range header sent by the client."
  },
  {
    "code": 207,
    "description": "Multi-Status",
    "category": "Success",
    "meaning": "The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made."
  },
  {
    "code": 208,
    "description": "Already Reported",
    "category": "Success",
    "meaning": "The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again."
  },
  {
    "code": 226,
    "description": "IM Used",
    "category": "Success",
    "meaning": "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."
  },
  {
    "code": 300,
    "description": "Multiple Choices",
    "category": "Redirection",
    "meaning": "The request has more than one possible response. The user-agent or user should choose one of them."
  },
  {
    "code": 301,
    "description": "Moved Permanently",
    "category": "Redirection",
    "meaning": "The requested resource has been permanently moved to a new location."
  },
  {
    "code": 302,
    "description": "Found",
    "category": "Redirection",
    "meaning": "The requested resource resides temporarily under a different URI."
  },
  {
    "code": 303,
    "description": "See Other",
    "category": "Redirection",
    "meaning": "The response to the request can be found under another URI using a GET method."
  },
  {
    "code": 304,
    "description": "Not Modified",
    "category": "Redirection",
    "meaning": "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match."
  },
  {
    "code": 305,
    "description": "Use Proxy",
    "category": "Redirection",
    "meaning": "The requested resource is available only through a proxy, the address for which is provided in the response."
  },
  {
    "code": 307,
    "description": "Temporary Redirect",
    "category": "Redirection",
    "meaning": "The requested resource resides temporarily under a different URI."
  },
  {
    "code": 308,
    "description": "Permanent Redirect",
    "category": "Redirection",
    "meaning": "The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."
  },
  {
    "code": 400,
    "description": "Bad Request",
    "category": "Client Error",
    "meaning": "The server cannot process the request due to something that is perceived to be a client error."
  },
  {
    "code": 401,
    "description": "Unauthorized",
    "category": "Client Error",
    "meaning": "The request has not been applied because it lacks valid authentication credentials for the target resource."
  },
  {
    "code": 402,
    "description": "Payment Required",
    "category": "Client Error",
    "meaning": "Reserved for future use."
  },
  {
    "code": 403,
    "description": "Forbidden",
    "category": "Client Error",
    "meaning": "The server understood the request but refuses to authorize it."
  },
  {
    "code": 404,
    "description": "Not Found",
    "category": "Client Error",
    "meaning": "The server has not found anything matching the Request-URI."
  },
  {
    "code": 405,
    "description": "Method Not Allowed",
    "category": "Client Error",
    "meaning": "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI."
  },
  {
    "code": 406,
    "description": "Not Acceptable",
    "category": "Client Error",
    "meaning": "The resource identified by the request is only capable of generating response entities that have content characteristics not acceptable according to the accept headers sent in the request."
  },
  {
    "code": 407,
    "description": "Proxy Authentication Required",
    "category": "Client Error",
    "meaning": "The client must first authenticate itself with the proxy."
  },
  {
    "code": 408,
    "description": "Request Timeout",
    "category": "Client Error",
    "meaning": "The client did not produce a request within the time that the server was prepared to wait."
  },
  {
    "code": 409,
    "description": "Conflict",
    "category": "Client Error",
    "meaning": "The request could not be completed due to a conflict with the current state of the resource."
  },
  {
    "code": 410,
    "description": "Gone",
    "category": "Client Error",
    "meaning": "The requested resource is no longer available at the server and no forwarding address is known."
  },
  {
    "code": 411,
    "description": "Length Required",
    "category": "Client Error",
    "meaning": "The server refuses to accept the request without a defined Content-Length."
  },
  {
    "code": 412,
    "description": "Precondition Failed",
    "category": "Client Error",
    "meaning": "The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server."
  },
  {
    "code": 413,
    "description": "Payload Too Large",
    "category": "Client Error",
    "meaning": "The server is refusing to process a request because the request payload is larger than the server is willing or able to process."
  },
  {
    "code": 414,
    "description": "URI Too Long",
    "category": "Client Error",
    "meaning": "The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret."
  },
  {
    "code": 415,
    "description": "Unsupported Media Type",
    "category": "Client Error",
    "meaning": "The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method."
  },
  {
    "code": 416,
    "description": "Range Not Satisfiable",
    "category": "Client Error",
    "meaning": "None of the ranges in the Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."
  },
  {
    "code": 417,
    "description": "Expectation Failed",
    "category": "Client Error",
    "meaning": "The expectation given in the Expect request-header field could not be met by this server."
  },
  {
    "code": 418,
    "description": "I'm a teapot",
    "category": "Client Error",
    "meaning": "Any attempt to brew coffee with a teapot should result in the error code 418 I'm a teapot."
  },
  {
    "code": 421,
    "description": "Misdirected Request",
    "category": "Client Error",
    "meaning": "The request was directed at a server that is not able to produce a response."
  },
  {
    "code": 422,
    "description": "Unprocessable Entity",
    "category": "Client Error",
    "meaning": "The server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions."
  },
  {
    "code": 423,
    "description": "Locked",
    "category": "Client Error",
    "meaning": "The source or destination resource of a method is locked."
  },
  {
    "code": 424,
    "description": "Failed Dependency",
    "category": "Client Error",
    "meaning": "The method could not be performed on the resource because the requested action depended on another action and that action failed."
  },
  {
    "code": 425,
    "description": "Too Early",
    "category": "Client Error",
    "meaning": "Indicates that the server is unwilling to risk processing a request that might be replayed."
  },
  {
    "code": 426,
    "description": "Upgrade Required",
    "category": "Client Error",
    "meaning": "The client should switch to a different protocol such as TLS/1.0."
  },
  {
    "code": 428,
    "description": "Precondition Required",
    "category": "Client Error",
    "meaning": "The origin server requires the request to be conditional."
  },
  {
    "code": 429,
    "description": "Too Many Requests",
    "category": "Client Error",
    "meaning": "The user has sent too many requests in a given amount of time."
  },
  {
    "code": 431,
    "description": "Request Header Fields Too Large",
    "category": "Client Error",
    "meaning": "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large."
  },
  {
    "code": 451,
    "description": "Unavailable For Legal Reasons",
    "category": "Client Error",
    "meaning": "The server is denying access to the resource as a consequence of a legal demand."
  },
  {
    "code": 500,
    "description": "Internal Server Error",
    "category": "Server Error",
    "meaning": "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
  },
  {
    "code": 501,
    "description": "Not Implemented",
    "category": "Server Error",
    "meaning": "The server either does not recognize the request method, or it lacks the ability to fulfill the request."
  },
  {
    "code": 502,
    "description": "Bad Gateway",
    "category": "Server Error",
    "meaning": "The server was acting as a gateway or proxy and received an invalid response from the upstream server."
  },
  {
    "code": 503,
    "description": "Service Unavailable",
    "category": "Server Error",
    "meaning": "The server is currently unavailable (overloaded or down)."
  },
  {
    "code": 504,
    "description": "Gateway Timeout",
    "category": "Server Error",
    "meaning": "The server was acting as a gateway or proxy and did not receive a timely response from the upstream server."
  },
  {
    "code": 505,
    "description": "HTTP Version Not Supported",
    "category": "Server Error",
    "meaning": "The server does not support the HTTP protocol version used in the request."
  },
  {
    "code": 506,
    "description": "Variant Also Negotiates",
    "category": "Server Error",
    "meaning": "Transparent content negotiation for the request results in a circular reference."
  },
  {
    "code": 507,
    "description": "Insufficient Storage",
    "category": "Server Error",
    "meaning": "The server is unable to store the representation needed to complete the request."
  },
  {
    "code": 508,
    "description": "Loop Detected",
    "category": "Server Error",
    "meaning": "The server detected an infinite loop while processing the request."
  },


  {
    "code": 510,
    "description": "Not Extended",
    "category": "Server Error",
    "meaning": "Further extensions to the request are required for the server to fulfill it."
  },
  {
    "code": 511,
    "description": "Network Authentication Required",
    "category": "Server Error",
    "meaning": "The client needs to authenticate to gain network access."
  }
]