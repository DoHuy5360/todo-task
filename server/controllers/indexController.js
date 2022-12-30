import { todoCardModel } from "../database/models/todoCardModel.js";

const index = async (req, res) => {
	try {
		const dataResult = {};
		const getTodoCard = await todoCardModel.find({ status: "0" });
		const getProgressCard = await todoCardModel.find({ status: "1" });
		const getCompleteCard = await todoCardModel.find({ status: "2" });
		const amountTodoCard = await todoCardModel.countDocuments({ status: "0" });
		const amountProgressCard = await todoCardModel.countDocuments({ status: "1" });
		const amountCompleteCard = await todoCardModel.countDocuments({ status: "2" });

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
