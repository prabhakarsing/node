var exp=require('express')
var app=exp()

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
})
	  app.listen(1000)
	  console.log("1000")