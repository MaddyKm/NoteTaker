const notes = require("express").Router();
const fs = require("fs");
const path = require("path");

notes.get("/", (req, res) => {
  // reads from db.json
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

notes.post("/", (req, res) => {
  let newNote = "";
  console.log(req.body);
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      newNote = JSON.parse(data);

      // add req.body to the saved content
      const { title, text } = req.body;
      const randomID = Math.floor(Math.random() * 1000);
      const stringID = randomID.toString();
      if (req.body) {
        const completeNote = {
          title,
          text,
          id: stringID,
        };
        newNote.push(completeNote);
        console.log(newNote);
      }

      // override old file
      fs.writeFile("./db.json", JSON.stringify(newNote), (err) => {
        if (err) {
          console.error(err);
        }
        res.json(newNote);
        // file written successfully
      });
    }
  });

  //   read the file
  // save the contents of the file into a variable
});

module.exports = notes;
