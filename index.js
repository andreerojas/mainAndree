const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const ejsMate = require('ejs-mate');
const {projects} = require('./utilities/listProjects');

app.use(express.static(path.join(__dirname,'/public')));
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home',{projects})
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})