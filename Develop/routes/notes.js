const notes = require("express").Router();
const {
  readAndAppend,
  readFromFile,
  writeToFile,
} = require("./helpers/fsUtils.js");

notes.get("/", (req, res) => {
  //reads from db.json
  readFromFile("./db/feedback.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  //reads and appends new tip and returns notes
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile("./db/db.json", parsedData);
    }
  });
});

module.exports = notes;
