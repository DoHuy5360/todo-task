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
		owner: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

export const todoCardModel = mongoose.model("todo_cards", schema);
