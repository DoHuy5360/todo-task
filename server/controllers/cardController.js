import { todoCardModel } from "../database/models/todoCardModel.js";

const showCard = async (req, res) => {
	try {
		const dataResult = {};
		const getTodoCard = await todoCardModel.find({ status: "Todo" });
		const getProgressCard = await todoCardModel.find({ status: "In Progress" });
		const getCompleteCard = await todoCardModel.find({ status: "Completed" });
		const amountTodoCard = await todoCardModel.countDocuments({ status: "Todo" });
		const amountProgressCard = await todoCardModel.countDocuments({ status: "In Progress" });
		const amountCompleteCard = await todoCardModel.countDocuments({ status: "Completed" });

		dataResult.columns = [
			{ name: "Todo", amountCard: amountTodoCard, cards: getTodoCard },
			{ name: "In Progress", amountCard: amountProgressCard, cards: getProgressCard },
			{ name: "Completed", amountCard: amountCompleteCard, cards: getCompleteCard },
		];
		return res.json(dataResult);
	} catch (error) {
		return res.send("Error: ", error);
	}
};

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
	const de = await todoCardModel.findByIdAndRemove(req.params.id);
	res.send(de);
};
export { showCard, addCard, updateCard, deleteCard };
