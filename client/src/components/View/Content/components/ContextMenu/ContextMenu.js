import { useRef } from "react";

function ContextMenu({ visible, dataEvent, cardData, setContent, handleCloseContextMenu, setShowDialog, setDialogContent }) {
	const cntxtMenu = useRef();
	if (dataEvent) {
		cntxtMenu.current = {
			left: `${dataEvent.clientX}px`,
			top: `${dataEvent.clientY}px`,
		};
	}
	function deleteCard(event) {
		fetch(`https://todo-task-be.vercel.app/${cardData._id}/delete`, {
			method: "DELETE",
		}).then((res) => {
			if (res.status === 200) {
				alert("Delete successfully!");
				setContent((pre) => {
					return pre ? false : true;
				});
				handleCloseContextMenu(event);
			} else {
				alert("Delete failure!");
			}
		});
	}
	function handleUpdateCardContent(event) {
		const { _id, status, title, description } = cardData;
		handleCloseContextMenu(event);
		setShowDialog(event);
		setDialogContent({
			_id,
			status,
			title,
			description,
		});
	}
	return visible ? (
		<div style={cntxtMenu.current} className="absolute flex flex-col bg-white p-3 rounded drop-shadow-md translate-x-[-100%] translate-y-[-100%]">
			<div onClick={handleUpdateCardContent} className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">
				Update
			</div>
			<div onClick={deleteCard} className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer text-rose-900">
				Delete
			</div>
		</div>
	) : (
		<></>
	);
}

export default ContextMenu;