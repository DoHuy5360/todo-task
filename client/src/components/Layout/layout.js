import Header from "./Header/header.js";
import Sidebar from "./Sidebar/sidebar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Content, Start, Project, Chat, Calendar, Setting } from "../View/view.js";
function Layout() {
	return (
		<Router>
			<div className="flex w-full">
				<Sidebar />
				<div className="flex flex-col w-full h-screen">
					<Header />
					<Routes>
						<Route exact path="/" element={<Content />}></Route>
						<Route path="/start" element={<Start />}></Route>
						<Route path="/projects" element={<Project />}></Route>
						<Route path="/chat" element={<Chat />}></Route>
						<Route path="/calendar" element={<Calendar />}></Route>
						<Route path="/setting" element={<Setting />}></Route>
						{/* <Route path="/logout"></Route> */}
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default Layout;
