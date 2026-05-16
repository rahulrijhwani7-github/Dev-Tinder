const express = require('express');
const app = express();
const port = 7777;


// The callback function is know as the request handler, which is executed when the app receives a request to the specified route at the specified port. In this case, it sends a response with the text 'Hello World!'.
app.use("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello world!');
});

app.use("/test", (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello test test!');
});

app.use("/hello", (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello hello hello!');
});

// NOTE: The order of the routes matters. 
// If you have a more general route (like "/") before a more specific route (like "/test"),
// the general route will match first and the specific route will never be reached.
// In this case, since "/" is defined before "/test" and "/hello",
// any request to "/test" or "/hello" will be handled by the "/" route, 
// resulting in "Hello world!" being sent as the response instead of "Hello test test!" or
// "Hello hello hello!". To fix this, you should define the more specific routes 
// before the more general route. For example, you can define "/test" and "/hello" before "/". 
// This way, requests to "/test" and "/hello" will be handled by their respective routes, 
// and only requests to "/" will be handled by the "/" route.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 