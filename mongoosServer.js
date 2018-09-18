const express = require("express")
app=express()
const bp=require("body-parser")
app.use(bp.json())
const mongoose=require("mongoose")
Ins=require("./mongoose")

mongoose.connect("mongodb://localhost:27017/mongoose")
.then(()=>{console.log("connected")})
.catch(err=>console.error("cannot connect ",err))


//const Store=mongoose.model("store",insSchema)
app.post("/insdata",(req,res)=>{
   let data= req.body
new Ins(data
//     {
//     name:req.body.name,
//     lastnm:req.body.lastnm,
//     mob:req.body.mob,
//     add:[req.body.add[0],req.body.add[1]]
// }
).save((err,result)=>{
if(err) {res.send(err)}
else
res.status(200).send("added")
});

})
app.get("/getdata",(req,res)=>{
    Ins.find((err,result)=>{res.status(200).send(result)})
})
////////////////////////
app.put("/update/:id",(req,res)=>{
    var _id=req.params.id
    Ins.findOneAndUpdate(_id,{$set:{name:req.body.name}},()=>{
        res.status(200).send("updated")
    })
})
//db=mongoose.connection;
//db.on('error',console.error.bind(console,'connection error'))
app.listen(1000,()=>{
    console.log("started 1000")
})
