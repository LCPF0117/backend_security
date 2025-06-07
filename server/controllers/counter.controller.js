var counter = 0; 
const visitCounter = async (req, res)=>{
	counter ++;
	console.log(req.ip);
	console.log(req.socket.remoteAddress);
	console.log(req.headers);
	res.status(200).json({message:"counter up"})
}

const counterResult = async (req, res) =>{
	res.json({resultado: counter})
}

export default {
	visitCounter, 
	counterResult,
}
