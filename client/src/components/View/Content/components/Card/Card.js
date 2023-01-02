import { GoPrimitiveDot } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { useDrag } from "react-dnd";
import { useEffect, useRef, useState } from "react";
function Card({ _id, status, title, description, id, colId, handleShowContextMenu, setCardsIdContextMenu }) {
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
	const cardCurrent = useRef();
	function handleContextMenu(event) {
		handleShowContextMenu(event);
		setCardsIdContextMenu({ _id, status, title, description });
	}
	return (
		<div id={id} ref={drag} className={[isDragging ? "opacity-50" : "opacity-100", "xl:min-h-fit min-h-[136px]"].join(" ")}>
			<div ref={cardCurrent} className="h-full relative flex flex-col justify-between gap-2 py-2 pl-2 pr-4 rounded bg-white cursor-grab">
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-center">
						<div className={cardCSS(colId) + "xl:block hidden"}>
							<GoPrimitiveDot />
						</div>
						<div className="xl:w-fit xl:max-w-none w-28 max-w-28 truncate ...">{title}</div>
					</div>
					<div className="flex gap-2">
						<GrAttachment className="cursor-pointer" />
						<div onClick={handleContextMenu}>
							<SlOptionsVertical className="cursor-pointer" />
						</div>
					</div>
				</div>
				<div>
					<div className="text-xs overflow-y-scroll xl:max-w-fit xl:min-w-full xl:text-justify max-h-20 min-h-[80px] max-w-[160px] scrollbar-none bg-slate-50 p-1 rounded">{description}</div>
				</div>
				<div className="flex items-center">
					<div>
						<FaRegUserCircle />
					</div>
					<div>
						<FaRegUserCircle />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
