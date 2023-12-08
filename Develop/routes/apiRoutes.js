const router = require('express').Router();
const db = require('../db/db.json');
const { readFile } = require('fs');

router.get('/notes', (req, res) => {
   fs.readFile(db);
});
module.exports = router;