const express = require('express');
const path = require('path')
const app = express();
const router = require('./routes')

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use('/', router);

app.listen(PORT, (req,res) => {
    console.log(`Live status http://localhost:${PORT}`)
})