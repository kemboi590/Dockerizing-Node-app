import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Kemboi!!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server listening on port 3000!");
});

// left at 1:06:00 -> docker compose
