import { userModel } from "../database/models/userModel.js";
import Auth from "./auth/class/Auth.js";
import generateToken from "./auth/function/tokenGenerator.js";
const newUser = async (req, res) => {
	const { email, password } = req.body;
	const isEmailExist = await userModel.find({ email: email });
	if (isEmailExist.length === 0) {
		try {
			const token = generateToken(333);
			const addNewUser = new userModel({
				email,
				password,
				token,
			});
			addNewUser.save().then((rslt) => {
				const { _id } = rslt;
				const user = new Auth(_id.toHexString());
				res.json({ token, user });
			});
		} catch (error) {
			res.send(error);
		}
	} else {
		res.send("Email already taken!");
	}
};
export { newUser };
