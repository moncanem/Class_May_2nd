const express = require('express');
const cors = require('cors');
const fileManager = require('fs');
const filePath = '../../public/data/pictures.json';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", function(req, res){
    res.json(JSON.parse(fileManager.readFileSync(filePath,"utf8")));
});

app.listen(5000, function(){
    console.log("Server is running on port 5000")
});