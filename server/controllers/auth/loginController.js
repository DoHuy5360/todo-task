import { userModel } from "../../database/models/userModel.js";
import Auth from "./class/Auth.js";
import * as dotenv from "dotenv";
import generateToken from "./function/tokenGenerator.js";
import USER from "../class/USER.js";
dotenv.config();
const loginAuthentication = async (req, res) => {
	const { email, password } = req.body;
	const userBank = new USER();
	const { _id, name } = await userBank.give_me_user_have_this({ email: email, password: password });
	if (_id !== undefined) {
		const user = new Auth(name);
		const token = generateToken(333);
		await userModel.findOneAndUpdate({ email }, { token });
		res.json({
			token,
			user,
		});
	} else {
		res.send("Login fail!");
	}
};

const tokenAuthentication = async (req, res) => {
	const { token } = req.body;
	const getUser = await userModel.find({ token });
	if (getUser.length !== 0) {
		res.send(true);
	} else {
		res.send(false);
	}
};
const refreshToken = async (req, res) => {
	const { token } = req.body;
	const newToken = generateToken(333);
	try {
		await userModel.findOneAndUpdate({ token }, { token: newToken });
		res.send("Update success!");
	} catch (error) {
		res.send("Update fail!");
	}
};
export { loginAuthentication, tokenAuthentication, refreshToken };
