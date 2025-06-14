import express from "express";
import { fileURLToPath } from "url";
import { dirname, format } from "path";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

import counterRoutes from "./routes/counter.routes.js";


const app = express();


//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Routes

app.use("/",counterRoutes);
app.post('/test', (req, res)=>{
	console.log('POST recibido:', req.body);
	res.json({mensaje: 'Funciona'})
})

// Error handling

app.use((err,req,res,next)=>{
	if(err.name==="UnauthorizedError"){
		res.status(401).json({error: err.name + ": " + err.message});
	}else if(err){
		res.status(400).json({error: err.name + ": " + err.message});
		console.log(err);
	}
});

export default app;
