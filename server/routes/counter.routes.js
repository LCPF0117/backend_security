import express from "express";
import counterCtrl from "../controllers/counter.controller.js";

const router = express.Router();

router.route('/api/counter').get(counterCtrl.counterResult).post(counterCtrl.visitCounter);


export default router;
