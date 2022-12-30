import { todoCardModel } from "../database/models/todoCardModel.js";

const index = async (req, res) => {
	try {
		const dataResult = {};
		const getTodoCard = await todoCardModel.find();
		const amountTodoCard = await todoCardModel.countDocuments({ status: "0" });
		const amountProgressCard = await todoCardModel.countDocuments({ status: "1" });
		const amountCompleteCard = await todoCardModel.countDocuments({ status: "2" });
		dataResult.cards = getTodoCard;

		dataResult.columns = [
			{ name: "Todo", amountCard: amountTodoCard },
			{ name: "In Progress", amountCard: amountProgressCard },
			{ name: "Completed", amountCard: amountCompleteCard },
		];
		return res.json(dataResult);
	} catch (error) {
		return res.send("Error: ", error);
	}
};

export { index };
