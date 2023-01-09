import { createContext, useState } from "react";

const refreshContext = createContext();
function RefreshContext({ children }) {
	const [refresh, setRefresh] = useState(false);
	return <refreshContext.Provider value={{ refresh, setRefresh }}>{children}</refreshContext.Provider>;
}

export { RefreshContext, refreshContext };
