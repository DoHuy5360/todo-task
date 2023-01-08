import { useEffect, useState } from "react";
import LogoAnimation from "../animation/LogoAnimation";
import Login from "./Login";

function Authentication({ children }) {
	// const [token, setToken] = useState(window.localStorage.getItem("token"));
	const [token, setToken] = useState(document.cookie.split(";")[0].split("=")[1]);
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
	}, [token]);
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
