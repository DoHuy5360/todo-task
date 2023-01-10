import { useContext, useEffect, useRef } from "react";
import { optionBoxContext } from "../Context/OptionBoxContext";

function OptionBox({ children }) {
	const { showOptionBox, location } = useContext(optionBoxContext);
	const { clientX, clientY } = location.dataEvent;
	const { locationY, locationX } = location.direction;

	const locationCSS = useRef();
	useEffect(() => {
		if (locationCSS.current) {
			function locationParser() {
				const locationObj = {
					bottom: "translateY(0%)",
					left: "translateX(-100%)",
				};
				return `${locationObj[locationY]} ${locationObj[locationX]}`;
			}
			Object.assign(locationCSS.current.style, {
				top: `${clientY}px`,
				left: `${clientX}px`,
				transform: locationParser(),
			});
		}
	}, [location]);
	function handleWindowClick(event) {
		event.stopPropagation();
	}
	return showOptionBox ? (
		<div ref={locationCSS} onClick={handleWindowClick} className="fixed flex flex-col p-2 shadow-md rounded-sm bg-white">
			{children}
		</div>
	) : (
		<></>
	);
}

export default OptionBox;
