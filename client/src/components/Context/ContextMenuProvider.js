import { createContext, useState } from "react";

const contextMenuContext = createContext();

function ContextMenuProvider({ children }) {
	const [showContextMenu, setShowContextMenu] = useState({
		visible: false,
		dataEvent: null,
	});
	const objectState = {
		showContextMenu,
		setShowContextMenu,
	};
	return <contextMenuContext.Provider value={objectState}>{children}</contextMenuContext.Provider>;
}

export { ContextMenuProvider, contextMenuContext };
