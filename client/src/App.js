import "./App.css";
import Layout from "./components/Layout/layout.js";
import { ContextMenuProvider } from "./components/Context/ContextMenuProvider";
import { DialogProvider } from "./components/Context/DialogContext";
import { OptionBoxProvider } from "./components/Context/OptionBoxContext";

function App() {
	return (
		<OptionBoxProvider>
			<DialogProvider>
				<ContextMenuProvider>
					<Layout />
				</ContextMenuProvider>
			</DialogProvider>
		</OptionBoxProvider>
	);
}

export default App;
