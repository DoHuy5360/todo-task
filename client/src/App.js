import "./App.css";
import Layout from "./components/Layout/layout.js";
import { ContextMenuProvider } from "./components/Context/ContextMenuProvider";
import { DialogProvider } from "./components/Context/DialogContext";

function App() {
	return (
		<DialogProvider>
			<ContextMenuProvider>
				<Layout />
			</ContextMenuProvider>
		</DialogProvider>
	);
}

export default App;
