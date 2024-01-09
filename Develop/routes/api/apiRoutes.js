const router = require('express').Router();
const db = require('../../db/db.json');
const { readFile } = require('fs');
const { route } = require('./apiRoutes');

router.get('/notes', (req, res) => {
   fs.readFile(db);
   res.json(db);
}
);

router.post('/notes', (req, res) => {
   const newNote = req.body;
   db.push(newNote);
   fs.writeFile(db);
   res.json(db);
}
);

router.delete('/notes/:id', (req, res) => {
   const id = req.params.id;
   db.splice(id, 1);
   fs.writeFile(db);
   res.json(db);
}
);


module.exports = router;