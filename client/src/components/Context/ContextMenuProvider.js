import { createContext, useState } from "react";

const contextMenuContext = createContext();

function ContextMenuProvider({ children }) {
	const [cardsIdContextMenu, setCardsIdContextMenu] = useState("");
	const [showContextMenu, setShowContextMenu] = useState({
		visible: false,
		dataEvent: null,
	});
	return (
		<contextMenuContext.Provider
			value={{
				showContextMenu,
				setShowContextMenu,
				cardsIdContextMenu,
				setCardsIdContextMenu,
			}}
		>
			{children}
		</contextMenuContext.Provider>
	);
}

export { ContextMenuProvider, contextMenuContext };
