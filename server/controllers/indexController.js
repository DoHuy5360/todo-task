import { todoCardModel } from "../database/models/todoCardModel.js";

const index = async (req, res) => {
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

export { index };
