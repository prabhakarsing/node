
var Resp = [];
var response = {} 
response.firstObj ='';
response.sencondObj = '';
response.thirdObj = '';

async.waterfall([
      function (callback) {
	  request.post()
	  response.firstObj ='';
	  check err;
	  return callback(null,response);
	  },
      function (response,callback) {
	  request.post()
	  response.sencondObj = '';
	   callback(null,response);
	   },
	   
      function (response,callback) {
	  response.thirdObj = '';
        callback(null,response); 
      }
    ],function (err, resp) {
		Resp.push(resp);
     
	  
    });