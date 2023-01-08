import BROWSER from "./BROWSER.js";
class DATA_TYPE extends BROWSER {
	constructor() {
		super();
	}
	isArray(arg) {
		return Object.prototype.toString.call(arg) == "[object Array]";
	}
}
export default DATA_TYPE;
