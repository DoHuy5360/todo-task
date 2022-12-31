import express from "express";
import mongoose from "mongoose";
import { addCard, updateCard, deleteCard } from "./controllers/cardController.js";
import { index } from "./controllers/indexController.js";
import cors from "cors";

const corsConfig = {
	origin: "http://localhost:3000",
};
const app = express();
const PORT = process.env.port || 4000;
const URL = "mongodb://localhost:27017/todo-task";
app.use(express.json());
app.get("/", cors(corsConfig), index);
app.options("/add-card", cors(corsConfig), addCard);
app.post("/add-card", cors(corsConfig), addCard);
app.get("/update-card/:id/attr", cors(corsConfig), updateCard);
app.delete("/delete-card/:id/delete", cors(corsConfig), deleteCard);
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
