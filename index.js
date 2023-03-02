const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const ejsMate = require('ejs-mate');
const {mainprojects,frontEndMentorProjects} = require('./utilities/listProjects');
const {links} = require('./utilities/links');

app.use(express.static(path.join(__dirname,'/public')));
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home',{projects : mainprojects, links})
})

app.get('/frontendmentor',(req,res)=>{
    frontEndMentorProjects.sort((a,b)=>{
        const levels = {'Advanced' : 1,'Intermediate' : 2,'Junior' : 3,'Newbie' : 4};
        return levels[`${a.level}`] - levels[`${b.level}`];
    })
    res.render('frontendmentor',{projects : frontEndMentorProjects})
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})