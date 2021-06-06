const express = require('express');
const app = express();
const BodyParser = require('body-parser');

app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());

let people = {people:[{name: 'John'}]};

app.get('/people',function(req,res){
  res.json(people);
  res.end();
});

app.post('/people/:name',function(req,res){
  res.json({name: req.params.name});
  res.end();
});

app.post('/delete',function(req,res){
  if(req.body && req.body.name){
    people.people.push({name:req.body.name})
  }
  res.json(req);
  res.end();
});

app.get('/delete',function(req,res){
  if(req.body && req.body.name){
    people.people.push({name:req.body.name})
  }
  res.json(req);
  res.end();
});


app.listen('3030', function(){
  console.log('listening on');
});