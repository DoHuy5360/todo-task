import mongoose from "mongoose";

const schema = mongoose.Schema(
	{
		status: {
			type: String,
			require: true,
		},
		title: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: false,
		},
	},
	{ timestamps: true }
);

export const todoCardModel = mongoose.model("todo_cards", schema);
