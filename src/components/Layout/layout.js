import Header from "./Header/header.js";
import Sidebar from "./Sidebar/sidebar.js";

function Layout({ children }) {
	return (
		<>
			<div className="flex">
				<Sidebar />
				{children}
				<Header />
			</div>
		</>
	);
}

export default Layout;
