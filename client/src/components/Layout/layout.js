import Header from "./Header/header.js";
import Sidebar from "./Sidebar/sidebar.js";

function Layout({ children }) {
	return (
		<>
			<div className="flex w-full">
				<Sidebar />
				<div className="flex flex-col w-full h-screen">
					<Header />
					{children}
				</div>
			</div>
		</>
	);
}

export default Layout;
