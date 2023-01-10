import { createContext, useState } from "react";

const optionBoxContext = createContext();

function OptionBoxProvider({ children }) {
	const [showOptionBox, setShowOptionBox] = useState(false);
	const [selects, setSelects] = useState([]);
	const [location, setLocation] = useState({
		direction: {},
		dataEvent: {},
	});
	return <optionBoxContext.Provider value={{ location, setLocation, selects, setSelects, showOptionBox, setShowOptionBox }}>{children}</optionBoxContext.Provider>;
}

export { OptionBoxProvider, optionBoxContext };
