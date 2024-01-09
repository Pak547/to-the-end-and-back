const router = require('express').Router();
const express = require('express');
const app = express();
const db = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
   fs.readFile('../db/db.json', 'utf8', (err, data) => {
      if (err) {
         console.error(err);
         return;
      }
      console.log(data);
   });
   res.json(db);
});

app.post('/notes', (req, res) => {
   fs.readFile(path.join(__dirname, 'Develop', 'db', 'db.json'), 'utf8', (err, data) => {
     if (err) {
       console.error(err);
       res.status(500).json({ error: 'Internal Server Error' });
     } else {
       const notes = JSON.parse(data);
       
       const newNote = {
         id: uuidv4(),
         title: req.body.title,
         text: req.body.text, 
       };
 
       notes.push(newNote);
 
       fs.writeFile(
         path.join(__dirname, 'Develop', 'db', 'db.json'),
         JSON.stringify(notes),
         (err) => {
           if (err) {
             console.error(err);
             res.status(500).json({ error: 'Internal Server Error' });
           } else {
             res.json(newNote);
           }
         }
       );
     }
   });
 });

router.delete('/notes/:id', (req, res) => {
   const id = req.params.id;
   db.splice(id, 1);
   res.json(db);
});



module.exports = router;