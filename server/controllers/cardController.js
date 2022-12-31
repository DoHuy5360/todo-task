import { todoCardModel } from "../database/models/todoCardModel.js";

const addCard = (req, res) => {
	const { status, title, description } = req.body;
	try {
		const addTodoCard = new todoCardModel({
			status,
			title,
			description,
		});
		addTodoCard.save();
		return res.send("Add successfully!");
	} catch (error) {
		return res.send(error);
	}
};
const updateCard = async (req, res) => {
	// res.send(req.params.id);
	// res.send(req.query.status);
	const cardSelected = await todoCardModel.findById(req.params.id);
	cardSelected.status = req.query.status;
	cardSelected.save();
	res.send("Update successfully!");
};
const deleteCard = async (req, res) => {
	// res.send(req.params.id);
	// res.send(req.query.status);
	await todoCardModel.findByIdAndRemove(req.params.id);
	res.send("Delete successfully!");
};
export { addCard, updateCard, deleteCard };
