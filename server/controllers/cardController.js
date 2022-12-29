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
const updateCard = async (req, res) => {
	// res.send(req.params.id);
	// res.send(req.query.status);
	const cardSelected = await todoCardModel.findById(req.params.id);
	cardSelected.status = req.query.status;
	cardSelected.save();
	res.send("Update successfully!");
};
export { addCard, updateCard };
