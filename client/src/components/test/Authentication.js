import { useEffect, useState } from "react";
import LogoAnimation from "../animation/LogoAnimation";
import COOKIES from "./class/COOKIES";
import Login from "./Login";

function Authentication({ children }) {
	const cookieBank = new COOKIES();
	const token = cookieBank.give_me_value_of("token");
	const [showContent, setShowContent] = useState(null);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/auth/open`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token }),
		})
			.then((res) => res.json())
			.then((auth) => {
				if (auth) {
					console.log("Token is match!");
					setShowContent(true);
				} else {
					console.log("Token is not match!");
					setShowContent(false);
				}
			});
	}, []);
	if (!token) {
		return <Login />;
	} else {
		if (showContent === null) {
			return <LogoAnimation />;
		} else if (showContent) {
			return children;
		} else {
			return <Login />;
		}
	}
}

export default Authentication;
