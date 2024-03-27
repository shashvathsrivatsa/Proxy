const http = require('http');
const httpProxy = require('http-proxy');

// Create a new HTTP proxy server
const proxy = httpProxy.createProxyServer({});

// Create a new HTTP server
const server = http.createServer((req, res) => {
    // Log the request
    console.log(`Proxying request for: ${req.url}`);

    // Proxy the request to Reddit
    proxy.web(req, res, {
        target: 'https://www.reddit.com',
    });
});

// Listen on a specific port
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
