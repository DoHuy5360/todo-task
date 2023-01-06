import { userModel } from "../database/models/userModel.js";
const newUser = async (req, res) => {
	const { email, password } = req.body;
	const isEmailExist = await userModel.find({ email: email });
	if (isEmailExist.length === 0) {
		try {
			const addNewUser = new userModel({
				email,
				password,
			});
			addNewUser.save();
			res.send("Sign up successfully!");
		} catch (error) {
			res.send(error);
		}
	} else {
		res.send("Email already taken!");
	}
};
export { newUser };
