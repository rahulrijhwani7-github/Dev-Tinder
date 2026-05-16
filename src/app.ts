const express = require('express');
const app = express();
const port = 7777;

app.get('/user', (req: any, res: { send: (arg0: { id: number; name: string; age: number; email: string }) => void }) => {
    console.log(req.query);  
    res.send({
        id: 1,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    });
});

app.get('/user/:id/:name/:email', (req: any, res: { send: (arg0: string | { id: number; name: string; age: number; email: string }) => void }) => {
    console.log(req.params);
    res.send({
        id: req.params.id,
        name: req.params.name,
        age: 30,
        email: req.params.email
    });
});

app.post('/user', (req: any, res: {send: (arg0: string) => void }) => {
    res.send('Data inserted successfully into db!');
});

app.delete('/user', (req: any, res: {send: (arg0: string) => void }) => {
  res.send('Data deleted successfully from db!');
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

app.use("/user", (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello Fallback route');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 