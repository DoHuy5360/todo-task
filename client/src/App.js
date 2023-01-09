import "./App.css";
import Layout from "./components/Layout/layout.js";
import { ContextMenuProvider } from "./components/Context/ContextMenuProvider";
function App() {
	return (
		<ContextMenuProvider>
			<Layout />
		</ContextMenuProvider>
	);
}

export default App;
