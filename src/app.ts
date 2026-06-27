const express = require("express");
const app = express();
const port = 7777;

interface Error {
  status: string;
  statusCode: number;
}

app.get(
  "/:id",
  (req: any, res: { send: (arg0: string) => void }, next: () => void) => {
    // res.send("This is the second callback function for the / route.");
    console.log(
      "This is the first callback function for the use method of / route.",
    );
    next();
  },
  (req: any, res: { send: (arg0: string) => void }, next: () => void) => {
    console.log(
      "This is the second callback function for the use method of / route.",
    );
    res.send("Response from second callback of / route.");
    next();
  },
);

// Note:The callback functions are called route handlers, and the paths are their corresponding routes.
// The route handlers are executed when the app receives a request to the specified route and HTTP method.
// One route can have multiple route handlers, which are executed in the order they are defined.
app.get(
  "/",
  (req: any, res: { send: (arg0: string) => void }, next: () => void) => {
    // res.send("This is the second callback function for the / route.");
    console.log("This is the first callback function for the / route.");
    next();
  },
  (req: any, res: { send: (arg0: string) => void }, next: () => void) => {
    console.log("This is the second callback function for the / route.");
    res.send("Response from second callback of / route.");
    next();
  },
);

app.get(
  "/user",
  (
    req: any,
    res: {
      send: (arg0: {
        id: number;
        name: string;
        age: number;
        email: string;
      }) => void;
    },
    next: () => void,
  ) => {
    console.log(req.query);
    res.send({
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
    });
  },
  (req: any, res: { send: (arg0: string) => void }, next: () => void) => {
    console.log("This is the second callback function for the /user route.");
    res.send("Hello from the second callback function!");
    next();
  },
  [
    (
      req: any,
      res: {
        send: (arg0: {
          id: number;
          name: string;
          age: number;
          email: string;
        }) => void;
      },
      next: () => void,
    ) => {
      console.log(req.query);
      res.send({
        id: 1,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
      });
    },
    (req: any, res: { send: (arg0: string) => void }, next: () => void) => {
      console.log("This is the second callback function for the /user route.");
      res.send("Hello from the second callback function!");
      next();
    },
  ],
  [
    (res: { send: (arg0: string) => void }, req: any, next: () => void) => {
      console.log("This is the third callback function for the /user route.");
    },
  ],
);

app.get(
  "/user/:id/:name/:email",
  (
    req: any,
    res: {
      send: (
        arg0: string | { id: number; name: string; age: number; email: string },
      ) => void;
    },
  ) => {
    console.log(req.params);
    res.send({
      id: req.params.id,
      name: req.params.name,
      age: 30,
      email: req.params.email,
    });
  },
);

app.post("/user", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Data inserted successfully into db!");
});

app.delete("/user", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Data deleted successfully from db!");
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
  res.send("Hello Fallback route");
});

app.all(
  "*",
  (
    req: any,
    res: { send: (arg0: string) => void },
    next: (arg0: Error) => void,
  ) => {
    const err = new Error("Cant find on server: 404");
    err.message = "fail";
    err.statusCode = 404;
    next(err);
  },
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
