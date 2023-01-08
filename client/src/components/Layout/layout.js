import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header/header.js";
import Sidebar from "./Sidebar/sidebar.js";
import { Content, Start, Project, Chat, Calendar, Setting } from "../View/view.js";
import { useState } from "react";
import ServerLoadingAnimation from "../animation/ServerLoadingAnimation.js";
import Login from "../test/Login.js";
import Authentication from "../test/Authentication.js";
function Layout() {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<Authentication>
			<Router>
				<div className="flex w-full h-fit min-h-screen max-h-screen">
					<div className={[showSidebar ? "block" : "hidden", "xl:w-60 w-14"].join(" ")}>
						<Sidebar />
					</div>
					<div className={[showSidebar ? "xl:w-full w-[calc(100%-56px)]" : "w-full", "flex flex-col"].join(" ")}>
						<Header setShowSidebar={setShowSidebar} />
						<div className="xl:px-7 px-4 overflow-y-scroll">
							<Routes>
								<Route exact path="/" element={<Content />}></Route>
								<Route path="/start" element={<Start />}></Route>
								<Route path="/projects" element={<Project />}></Route>
								<Route path="/chat" element={<Chat />}></Route>
								<Route path="/calendar" element={<Calendar />}></Route>
								<Route path="/setting" element={<Setting />}></Route>
								<Route path="/logout" element={<ServerLoadingAnimation visible={true} />}></Route>
								<Route path="/login" element={<Login />}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		</Authentication>
	);
}

export default Layout;
