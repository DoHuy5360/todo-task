import { todoCardModel } from "../database/models/todoCardModel.js";

const addCard = (req, res) => {
	const addTodoCard = new todoCardModel({
		status: "0",
		title: "Test",
		description: "Tes",
	});
	addTodoCard.save();
	try {
	} catch (error) {}
};
export { addCard };
