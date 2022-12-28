import { todoCardModel } from "../database/models/todoCardModel.js";

const index = async (req, res) => {
	try {
		const getTodoCard = await todoCardModel.find();
		return res.json(getTodoCard);
	} catch (error) {
		return res.send("Error: ", error);
	}
};

export { index };
