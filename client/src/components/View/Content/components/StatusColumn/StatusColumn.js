import { useDrop } from "react-dnd";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { useContext } from "react";
import { contextMenuContext } from "../../../../Context/ContextMenuProvider";
import { dialogContext } from "../../../../Context/DialogContext";
import CARD from "../../../../test/class/CARD.js";
import { refreshContext } from "../../../../Context/RefreshContext";
function StatusColumn({ name, amountCard, colId, children }) {
	const { setRefresh } = useContext(refreshContext);
	const { setShowDialog, setDialogStatus } = useContext(dialogContext);
	const { setShowContextMenu } = useContext(contextMenuContext);
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: (item, monitor) => {
			const { _id } = item;
			const cardBank = new CARD("Update");
			cardBank
				.update_this_card_status(_id, name)
				.then(() => {
					setRefresh((pre) => {
						return pre ? false : true;
					});
					setShowContextMenu({
						visible: false,
						dataEvent: null,
					});
				})
				.catch();
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});
	function cardCSS(_colId) {
		const sameClass = " text-2xl ";
		if (colId === 0) {
			return "text-rose-500" + sameClass;
		} else if (colId === 1) {
			return "text-amber-500" + sameClass;
		} else {
			return "text-green-500" + sameClass;
		}
	}
	return (
		<div className="flex flex-col gap-2 bg-slate-300 w-full p-2 xl:rounded-sm rounded xl:h-[560px] overflow-hidden">
			<div className="select-none flex xl:flex-col flex-row justify-between">
				<div className="flex gap-2 items-center justify-between xl:py-1">
					<div className={cardCSS(colId) + "xl:hidden block"}>
						<GoPrimitiveDot />
					</div>
					<div>{name}</div>
					<div>{amountCard}</div>
				</div>
				<div
					onClick={(event) => {
						setShowContextMenu({
							visible: false,
							dataEvent: null,
						});
						setShowDialog(true);
						setDialogStatus(name);
					}}
					className="grid place-items-center bg-white xl:rounded-sm rounded cursor-pointer xl:w-full w-7 h-7"
				>
					<AiOutlinePlus />
				</div>
			</div>
			<div id={colId} ref={drop} className={(isOver ? "bg-slate-200" : "bg-transparent") + " min-h-[50px] flex xl:flex-col flex-row gap-2 overflow-y-scroll h-full hover:scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full duration-300 ease-linear"}>
				{children}
			</div>
		</div>
	);
}

export default StatusColumn;
