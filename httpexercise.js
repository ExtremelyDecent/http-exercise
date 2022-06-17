/*Part 1:
1. HTTP is hyper text transfer protocol. it is the protocol for how data is transferred to and from a server 
2. A URL is a Uniform Resource Locator, it is the address for an some data or resource on the internet
3. DNS is Domain Name Server, it is what converts a url to an IP address.
4. A query string is how data is sent from the client side to the server in a URL usually in the form of key value pairs.
5. GET and POST are HTTP verbs, GET is a request for data from a server, POST is used to send data to a server which will somehow be stored by the server
6. HTTP request is call from the client to the server for the server to do something following HTTP.
7. HTTP repsonse is what the server sends back to the client following a request.
8. Headers are data pertaining to the response or request
response headers are what the server sends, the date, time, what the content type is, when the page was last modified
request headers are the browser type, the user platform, whether or not it's a mobile device,
9. First the URL will be converted to an IP address via a DNS,
Then the browser will make a HTTP request with headers
The server will then send a response with a response code and headers
The browser will populate anything send from the server on the DOM in the browser and get any other resources it needs from the server
The browser will then make a separate the HTTP request for any other resources it needs from the server or other locations
Part 2
   Trying 172.67.211.64:80...
* TCP_NODELAY set
* Connected to icanhazdadjoke.com (172.67.211.64) port 80 (#0)
> GET / HTTP/1.1
> Host: icanhazdadjoke.com
> User-Agent: curl/7.68.0
> Accept: */
/*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 308 Permanent Redirect
< Date: Fri, 17 Jun 2022 16:40:01 GMT
< Content-Length: 0
< Connection: keep-alive
< Location: https://icanhazdadjoke.com/
< CF-Cache-Status: DYNAMIC
< Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=k3s7s0mFyDZFnysBVoCIw4hz8bjMJytazxNE%2FgGPATsQ2G08mS0zeWqNdvGWQEJeDccDCJ6TTIGUnVFVYs3KiM5NnV4Y3tW9kJSE9ai8yX0mkafX4nhLyy5h2wzDVhXBaVoyxRU%3D"}],"group":"cf-nel","max_age":604800}
< NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
< X-Content-Type-Options: nosniff
< Server: cloudflare
< CF-RAY: 71cd39818a0d8c1e-EWR
< alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400


*/

//172.22.224.1#53(172.22.224.1)

/*

*/