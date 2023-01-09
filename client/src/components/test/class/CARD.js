class CARD {
	constructor(action) {
		this.action = action;
		this.is_server_path = process.env.REACT_APP_DESTINATION_REQUEST;
		this.response_status_valid = false;
		this.action_have_an_error = false;
	}
	then(result) {
		if (this.response_status_valid) {
			result();
		} else {
			this.action_have_an_error = true;
		}
		return this;
	}
	catch() {
		if (this.action_have_an_error) {
			console.warn(`${this.action} fail!`);
		}
	}
	async update_this_card_status(_id, status) {
		await fetch(`${this.is_server_path}/update-card/status`, {
			method: "POST",
			headers: {
				accept: "Application/json",
				"Content-Type": "Application/json",
			},
			body: JSON.stringify({ _id, status }),
		}).then((res) => {
			this.response_status_valid = res.status === 200 || false;
		});
		return this;
	}
	// check_status_equal_to(statusCode) {
	// 	const statusObj = {
	// 		200: true,
	// 	};
	// 	this.response_status_valid = statusObj[statusCode];
	// 	return this;
	// }
}
export default CARD;
