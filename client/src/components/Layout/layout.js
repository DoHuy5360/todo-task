import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/header.js";
import Sidebar from "./Sidebar/sidebar.js";
import { Content, Start, Project, Chat, Calendar, Setting } from "../View/view.js";
import { useContext, useEffect, useState } from "react";
import Authentication from "../test/Authentication.js";
import { contextMenuContext } from "../Context/ContextMenuProvider.js";
import { RefreshContext } from "../Context/RefreshContext.js";
function Layout() {
	const [showSidebar, setShowSidebar] = useState(false);
	const { showContextMenu, setShowContextMenu } = useContext(contextMenuContext);
	useEffect(() => {
		if (showContextMenu.visible) {
			window.addEventListener("click", (event) => {
				event.stopImmediatePropagation();
				setShowContextMenu({
					visible: false,
					dataEvent: null,
				});
			});
		}
	}, [showContextMenu]);
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
								<Route
									exact
									path="/"
									element={
										<RefreshContext>
											<Content />
										</RefreshContext>
									}
								></Route>
								<Route path="/start" element={<Start />}></Route>
								<Route path="/projects" element={<Project />}></Route>
								<Route path="/chat" element={<Chat />}></Route>
								<Route path="/calendar" element={<Calendar />}></Route>
								<Route path="/setting" element={<Setting />}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		</Authentication>
	);
}

export default Layout;
