let express=require("express")
request=require("request")

app=express()

request({url:'https://jsonplaceholder.typicode.com/todos/1',
	json:true},(err,res,body)=>{
try{
	console.log(body)
			
	}
	catch(err){
console.log(err)}
}
)
app.listen(1000,()=>{
console.log("running 1000")})
