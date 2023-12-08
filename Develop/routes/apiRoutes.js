const router = require('express').Router();
const db = require('../db/db.json');
const { readFile } = require('node:fs');

router.get('/notes', (req,res) => {
   //fs readFile
   fs.readFile(db)
});
module.exports = router;