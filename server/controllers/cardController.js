import { todoCardModel } from "../database/models/todoCardModel.js";
import { userModel } from "../database/models/userModel.js";

const showCard = async (req, res) => {
	const token = req.params.token;
	const { _id } = await userModel.findOne({ token }).then((rsult) => rsult);
	try {
		const dataResult = {};
		const getTodoCard = await todoCardModel.find({ owner: _id, status: "Todo" });
		const getProgressCard = await todoCardModel.find({ owner: _id, status: "In Progress" });
		const getCompleteCard = await todoCardModel.find({ owner: _id, status: "Completed" });

		dataResult.columns = [
			{ name: "Todo", amountCard: getTodoCard.length, cards: getTodoCard },
			{ name: "In Progress", amountCard: getProgressCard.length, cards: getProgressCard },
			{ name: "Completed", amountCard: getCompleteCard.length, cards: getCompleteCard },
		];
		return res.json(dataResult);
	} catch (error) {
		return res.send("Error: ", error);
	}
};

const addCard = async (req, res) => {
	const { status, title, description, token } = req.body;
	const { _id } = (await userModel.findOne({ token }).then((rsult) => rsult)) || {};
	if (_id !== undefined) {
		try {
			const addTodoCard = new todoCardModel({
				status,
				title,
				description,
				owner: _id,
			});
			addTodoCard.save();
			res.send("Add successfully!");
		} catch (error) {
			res.send(error);
		}
	} else {
		res.send("Invalid token");
	}
};
const updateStatusCard = async (req, res) => {
	// res.send(req.params.id);
	// res.send(req.query.status);
	const cardSelected = await todoCardModel.findById(req.params.id);
	cardSelected.status = req.query.status;
	cardSelected.save();
	res.send("Update successfully!");
};
const updateCard = async (req, res) => {
	const { status, title, description } = req.body;
	const cardSelected = await todoCardModel.findById(req.params.id);
	cardSelected.status = status;
	cardSelected.title = title;
	cardSelected.description = description;
	cardSelected.save();
	res.send("Update successfully!");
};
const deleteCard = async (req, res) => {
	const de = await todoCardModel.findByIdAndRemove(req.params.id);
	res.send(de);
};
export { showCard, addCard, updateStatusCard, updateCard, deleteCard };
