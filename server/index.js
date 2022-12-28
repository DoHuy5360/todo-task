import express from "express";
import mongoose from "mongoose";
import { addCard } from "./controllers/cardController.js";
import { index } from "./controllers/indexController.js";

const app = express();
const PORT = process.env.port || 4000;
const URL = "mongodb://localhost:27017/todo-task";
app.get("/", index);
app.post("/addCard", addCard);

mongoose
	.connect(URL)
	.then(() => {
		console.log("Connect successfully!");
		app.listen(PORT, () => {
			console.log(`Server runing on http://localhost:${PORT}/`);
		});
	})
	.catch((err) => {
		console.log("Connect error", err);
	});
