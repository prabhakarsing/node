var express=require("express")
var app=express()
var request = require('sync-request');
var dd=request("GET","https://jsonplaceholder.typicode.com/posts")
console.log(dd)



var res = app.get('http://google.com');
setTimeout(function(){
console.log("sync2 google")})


var res1 = app.get('http://gmail.com');
console.log("sync gmail")
//console.log(res.body.toString('utf-8'));


for(var i=1;i<=2;i++  )
             
                  console.log(i);
              ;