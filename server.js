//DEPENDENCIES
const express = require("express");
const path = require("path");
const fs = require("fs");

//DATA

//APP/PORT
const PORT = process.env.PORT || 3001;
const app = express();
const api = require("./routes/api");

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//ROUTES
app.use("/api", api);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
//START THE SERVER
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
