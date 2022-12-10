import * as express from "express";

const app = express();

app.get("/", (_,res) => res.send("hello world"))

app.listen(3000, () => console.log("listening on port http://localhost:3000"))