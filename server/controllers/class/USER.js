import { userModel } from "../../database/models/userModel.js";
class USER {
	constructor() {}
	async give_me_user_have_this(options = {}) {
		if (options && Object.keys(options).length === 0 && Object.getPrototypeOf(options) === Object.prototype) {
			console.warn("give_me_user_have_this_token(options = {}) need to passed an options object");
		} else {
			return (await userModel.findOne(options).then((rsult) => rsult)) || {};
		}
	}
}

export default USER;
