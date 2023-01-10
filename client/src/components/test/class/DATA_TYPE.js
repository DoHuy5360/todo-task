import BROWSER from "./BROWSER.js";
class DATA_TYPE extends BROWSER {
	constructor() {
		super();
	}
	isArray(arg = []) {
		return Object.prototype.toString.call(arg) == "[object Array]";
	}
	object_not_empty(arg = {}) {
		return arg && Object.keys(arg).length !== 0 && Object.getPrototypeOf(arg) === Object.prototype;
	}
	convert_this_to_json(arg = "") {
		try {
			return JSON.parse(arg);
		} catch (error) {
			console.warn("convert_it_to_json() recieved a wrong json string");
			return {};
		}
	}
}
export default DATA_TYPE;
