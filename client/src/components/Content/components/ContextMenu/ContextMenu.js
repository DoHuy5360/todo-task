import { useRef } from "react";

function ContextMenu({ visible, dataEvent }) {
	const cntxtMenu = useRef();
	if (dataEvent) {
		cntxtMenu.current = {
			left: `${dataEvent.clientX}px`,
			top: `${dataEvent.clientY}px`,
		};
	}
	function de() {
		console.log(1);
	}
	function deleteCard() {
		fetch("http://localhost:4000/delete-card/:id/delete");
	}
	return visible ? (
		<div style={cntxtMenu.current} className="absolute flex flex-col bg-white p-3 rounded drop-shadow-md translate-x-[-100%] translate-y-[-100%]">
			<div onClick={de} className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">
				Update
			</div>
			<div onClick={de} className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">
				Delete
			</div>
		</div>
	) : (
		<></>
	);
}

export default ContextMenu;
