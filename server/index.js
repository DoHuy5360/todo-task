import express from "express";
import mongoose from "mongoose";
import { showCard, addCard, updateStatusCard, updateCard, deleteCard } from "./controllers/cardController.js";
import { newUser } from "./controllers/userController.js";
import cors from "cors";
import * as dotenv from "dotenv";
import { loginAuthentication, tokenAuthentication } from "./controllers/auth/loginController.js";
dotenv.config();
const corsConfig = {
	origin: process.env.CORS_ORIGIN,
};
const app = express();
const PORT = process.env.port || 4000;
const URL = process.env.DATABASE_URL;
app.use(express.json());
app.get("/:token", [cors(corsConfig)], showCard);
app.options("/add-card", cors(corsConfig), addCard);
app.post("/add-card", cors(corsConfig), addCard);
app.get("/update-card/:id/attr", cors(corsConfig), updateStatusCard);

app.options("/:id/update", cors(corsConfig), updateCard);
app.post("/:id/update", cors(corsConfig), updateCard);

app.options("/:id/delete", cors(corsConfig), deleteCard);
app.delete("/:id/delete", cors(corsConfig), deleteCard);

app.options("/auth/login", cors(corsConfig), loginAuthentication);
app.post("/auth/login", cors(corsConfig), loginAuthentication);

app.options("/auth/open", cors(corsConfig), tokenAuthentication);
app.post("/auth/open", cors(corsConfig), tokenAuthentication);

app.options("/new-user", cors(corsConfig), newUser);
app.post("/new-user", cors(corsConfig), newUser);

mongoose
	.connect(URL, { dbName: "todoTaskDB" })
	.then(() => {
		console.log("Connect successfully!");
		app.listen(PORT, () => {
			console.log(`Server runing on http://localhost:${PORT}/`);
		});
	})
	.catch((err) => {
		console.log("Connect error", err);
	});
