import { userModel } from "../database/models/userModel.js";
import generateToken from "./auth/function/tokenGenerator.js";
const newUser = async (req, res) => {
	const { email, password } = req.body;
	const isEmailExist = await userModel.find({ email: email });
	if (isEmailExist.length === 0) {
		const token = generateToken(333);
		try {
			const addNewUser = new userModel({
				email,
				password,
				token,
			});
			addNewUser.save();
			res.json({ token });
		} catch (error) {
			res.send(error);
		}
	} else {
		res.send("Email already taken!");
	}
};
export { newUser };
