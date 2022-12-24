import { useRef, useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
function Card({ title, description, id }) {
	const card = useRef();
	function handleDragStart(e) {
		e.dataTransfer.setData("Text", e.target.id);
		console.log(`Dragged: %c${title}`, "color: green; font-weight: bold");
		card.current.classList.add("opacity-0");
	}
	function handleDragEnd() {
		card.current.classList.remove("opacity-0");
	}
	return (
		<div id={id} ref={card} onDragStart={handleDragStart} onDragEnd={handleDragEnd} draggable className="card relative flex flex-col gap-2 py-2 pl-2 pr-4 rounded bg-white cursor-grab">
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center">
					<div>
						<GoPrimitiveDot />
					</div>
					<div>{title}</div>
				</div>
				<div>
					<GrAttachment />
				</div>
			</div>
			<div>
				<div className="text-xs">{description}</div>
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
	);
}

export default Card;
