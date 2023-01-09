import { useRef, useContext } from "react";
import { contextMenuContext } from "../../../../Context/ContextMenuProvider";
import { dialogContext } from "../../../../Context/DialogContext";
function ContextMenu() {
	const { setShowContextMenu, cardsIdContextMenu, showContextMenu } = useContext(contextMenuContext);
	const { visible, dataEvent } = showContextMenu;
	const { _id, status, title, description, colId } = cardsIdContextMenu;
	const { setShowDialog, setContent, setDialogContent } = useContext(dialogContext);
	const cntxtMenu = useRef();
	if (dataEvent) {
		cntxtMenu.current = {
			left: `${dataEvent.clientX}px`,
			top: `${dataEvent.clientY - 10}px`,
		};
	}
	function deleteCard(event) {
		const isDeleteCard = window.confirm(`Accept to delete this card?\nCard title: ${title}`);
		if (isDeleteCard) {
			fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/${_id}/delete`, {
				method: "DELETE",
			}).then((res) => {
				if (res.status === 200) {
					alert("Delete successfully!");
					setContent((pre) => {
						return pre ? false : true;
					});
					setShowContextMenu({
						visible: false,
						dataEvent: null,
					});
				} else {
					alert("Delete failure!");
				}
			});
		}
	}
	function handleUpdateCardContent(event) {
		setShowContextMenu({
			visible: false,
			dataEvent: null,
		});
		setShowDialog(event);
		setDialogContent({
			_id,
			status,
			title,
			description,
		});
	}
	function ProcessButton() {
		if (colId === 0) {
			return (
				<>
					<div className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">In process</div>
					<div className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">Completed</div>
				</>
			);
		} else if (colId === 0) {
			return (
				<>
					<div className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">Todo</div>
					<div className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">Completed</div>
				</>
			);
		} else {
			return (
				<>
					<div className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">Todo</div>
					<div className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">In process</div>
				</>
			);
		}
	}
	return visible ? (
		<div style={cntxtMenu.current} className="z-20 absolute flex flex-col bg-white p-3 xl:rounded-sm rounded drop-shadow-md translate-x-[-100%] translate-y-[-100%]">
			<div className="flex flex-col gap-[1px]">
				<div className="">
					<ProcessButton />
				</div>
				<div className="flex flex-col">
					<div onClick={handleUpdateCardContent} className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer">
						Update
					</div>
					<div onClick={deleteCard} className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer text-rose-900">
						Delete
					</div>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}

export default ContextMenu;
