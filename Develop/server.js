const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3001;

pp.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, (req,res) => {
    console.log(`Live status http://localhost:${PORT}`)
})