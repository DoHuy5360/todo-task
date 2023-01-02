import { useDrop } from "react-dnd";
import { AiOutlinePlus } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

function StatusColumn({ name, amountCard, colId, setContent, setShowDialog, setDialogStatus, setShowContextMenu, handleCloseContextMenu, children }) {
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: (item, monitor) => {
			fetch(`http://localhost:4000/update-card/${item._id}/attr?status=${name}`).then((res) => {
				if (res.status === 200) {
					setContent((pre) => {
						return pre ? false : true;
					});
					setShowContextMenu({
						visible: false,
						dataEvent: null,
					});
				}
			});
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
		<div className="flex flex-col gap-2 bg-slate-300 w-full p-2 rounded xl:h-[560px] pb-4 overflow-hidden">
			<div className="select-none flex xl:flex-col flex-row justify-between">
				<div className="flex gap-2 items-center justify-between py-2">
					<div className={cardCSS(colId) + "xl:hidden block"}>
						<GoPrimitiveDot />
					</div>
					<div>{name}</div>
					<div>{amountCard}</div>
				</div>
				<div
					onClick={(event) => {
						handleCloseContextMenu(event);
						setShowDialog(true);
						setDialogStatus(name);
					}}
					className="grid place-items-center p-2 bg-white rounded cursor-pointer xl:w-full w-10"
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
