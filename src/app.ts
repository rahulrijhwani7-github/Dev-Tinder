const express = require('express');
const app = express();
const port = 7777;


// The callback function is know as the request handler, which is executed when the app receives a request to the specified route at the specified port. In this case, it sends a response with the text 'Hello World!'.
app.use("/test", (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 