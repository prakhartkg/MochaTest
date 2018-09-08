const experss = require('express');


var app = experss();


app.get("/",(req,res)=>{
  res.send('Hello World');
});

app.get("/users",(req,res)=>{
  res.send(
    [{
      name:'mike',
      age:25
    },
    {
    name:"prakhar",
    age:26
    }]
  );
});

module.exports = app;

app.listen(3000);
