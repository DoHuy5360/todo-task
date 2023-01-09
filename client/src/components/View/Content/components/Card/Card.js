import { GoPrimitiveDot } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { ImMoveUp } from "react-icons/im";
import { BsArrowsMove } from "react-icons/bs";
import { useDrag } from "react-dnd";
import { useRef, useContext } from "react";
import { contextMenuContext } from "../../../../Context/ContextMenuProvider";
function Card({ _id, status, title, description, updatedAt, id, colId }) {
	const friendlyUpdatedDate = useRef(updatedAt.slice(0, 10));
	const { setShowContextMenu, setCardsIdContextMenu } = useContext(contextMenuContext);
	const [{ isDragging }, drag] = useDrag({
		type: "card",
		item: {
			_id,
			status,
			title,
			description,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
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
	function handleContextMenu(event) {
		event.stopPropagation();
		setShowContextMenu({
			visible: true,
			dataEvent: event,
		});
		setCardsIdContextMenu({ _id, status, title, description, colId });
	}
	return (
		<div id={id} className={[isDragging ? "opacity-50" : "opacity-100", "xl:min-h-fit min-h-[136px]"].join(" ")}>
			<div className="h-full relative flex flex-col justify-between gap-2 py-2 pl-2 pr-4 xl:rounded-sm rounded bg-white">
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-center">
						<div className={cardCSS(colId) + "xl:block hidden"}>
							<GoPrimitiveDot />
						</div>
						<div className="xl:w-fit xl:max-w-none w-28 max-w-28 truncate ...">{title}</div>
					</div>
					<div className="flex gap-2">
						<div ref={drag} className="sm:block hidden">
							<ImMoveUp className="cursor-grab" />
						</div>
						<div onClick={handleContextMenu}>
							<SlOptionsVertical className="cursor-pointer" />
						</div>
					</div>
				</div>
				<div>
					<div className="text-xs overflow-y-scroll xl:max-w-fit xl:min-w-full xl:text-justify max-h-20 min-h-[80px] max-w-[160px] scrollbar-none bg-slate-50 p-1 break-all rounded cursor-text">{description}</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<FaRegUserCircle />
						<FaRegUserCircle />
					</div>
					<div className="text-xs">{friendlyUpdatedDate.current}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
