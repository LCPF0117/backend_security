import config from "./../config/config.js";
import app from "./express.js";

app.listen(config.port, (err)=>{
	console.log("appListen: ", config.port);
	if(err){
		console.log(err);
	}else{
		console.info("Server started on port %s.", config.port);
	}
});

