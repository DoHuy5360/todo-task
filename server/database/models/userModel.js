import mongoose from "mongoose";

const schema = mongoose.Schema({
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	token: {
		type: String,
		require: true,
	},
});

export const userModel = mongoose.model("users", schema);
