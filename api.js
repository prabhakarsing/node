request=require("request")
 request({
	 url:'https://maps.googleapis.com/maps/api/geocode/json?address=%20sanatnagar%20hderabad',
	 json:true
 },(error,response,body)=>{
	 console.log(body)
	 console.log("lattitude:${ body.results[0].geometry.location.lat}")
 })