import DATA_TYPE from "./DATA_TYPE.js";

class COOKIES extends DATA_TYPE {
	constructor() {
		super();
		this.cookies = document.cookie.split(";");
	}
	then(action) {
		return action();
	}
	give_me_value_of(cookieName = "") {
		if (this.give_me_all_cookies("name").includes(cookieName)) {
			return (
				this.cookies
					.filter((key) => {
						return key.split("=")[0].trim() == cookieName;
					})[0]
					?.split("=")[1] || console.warn(`Invalid ${cookieName} name!`)
			);
		} else {
			console.warn("give_me_value_of(cookieName) need passed one cookie name");
			return undefined;
		}
	}
	give_me_all_cookies(type = "name") {
		if (["name", "value"].includes(type)) {
			return this.cookies.map((rawCookie) => {
				return rawCookie.split("=")[type == "name" ? 0 : 1].trim();
			});
		} else {
			console.warn("giveMeAllCookiesArray(type) missing 'type' parameter or invalid input!");
		}
	}
	delete_those_cookies(cookies = []) {
		console.log("delete");
		if (this.isArray(cookies)) {
			if (cookies.length !== 0) {
				cookies.forEach((cookieName) => {
					document.cookie = `${cookieName.trim()}=;expires = Thu, 01 Jan 1970 00:00:00 GMT`;
				});
			}
		}
		return this;
	}
	delete_all_cookies() {
		return this.delete_those_cookies(this.give_me_all_cookies("name"));
	}
	store_these_cookies(cookies = {}) {
		if (this.object_not_empty(cookies)) {
			for (const name in cookies) {
				if (Object.hasOwnProperty.call(cookies, name)) {
					const value = cookies[name];
					document.cookie = `${name}=${value}`;
				}
			}
			return this;
		} else {
			console.warn("store_these_cookies(cookies = {}) need to passed at least one object that contain name and value of cookie");
		}
	}
}
export default COOKIES;
