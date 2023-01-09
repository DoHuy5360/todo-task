import { createContext, useState } from "react";

const dialogContext = createContext();

function DialogProvider({ children }) {
	const [showDialog, setShowDialog] = useState(false);
	const [dialogStatus, setDialogStatus] = useState("");
	const [dialogContent, setDialogContent] = useState({});
	return <dialogContext.Provider value={{ showDialog, setShowDialog, dialogStatus, setDialogStatus, dialogContent, setDialogContent }}>{children}</dialogContext.Provider>;
}

export { DialogProvider, dialogContext };
