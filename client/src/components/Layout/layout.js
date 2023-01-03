import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/header.js";
import Sidebar from "./Sidebar/sidebar.js";
import { Content, Start, Project, Chat, Calendar, Setting } from "../View/view.js";
import { useState } from "react";
import ServerRequest from "../animation/ServerRequest.js";
function Layout() {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<Router>
			<div className="flex w-full h-fit">
				<div className={[showSidebar ? "block" : "hidden", "xl:w-60 w-14"].join(" ")}>
					<Sidebar />
				</div>
				<div className="flex flex-col w-full">
					<Header setShowSidebar={setShowSidebar} />
					<div className="px-7">
						<Routes>
							<Route exact path="/" element={<Content />}></Route>
							<Route path="/start" element={<Start />}></Route>
							<Route path="/projects" element={<Project />}></Route>
							<Route path="/chat" element={<Chat />}></Route>
							<Route path="/calendar" element={<Calendar />}></Route>
							<Route path="/setting" element={<Setting />}></Route>
							<Route path="/logout" element={<ServerRequest visible={false} />}></Route>
						</Routes>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default Layout;
