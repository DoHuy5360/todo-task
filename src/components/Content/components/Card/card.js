import { GoPrimitiveDot } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
function Card({ title, description }) {
	let clone_card;
	function handleDragStart(e) {
		clone_card = e.target.cloneNode(true);
		e.target.classList.add("opacity-0");
		e.target.parentNode.appendChild(clone_card);
	}
	function handleDrag(e) {
		Object.assign(clone_card.style, {
			position: "absolute",
			top: `${e.pageY - clone_card.offsetHeight / 2}px`,
			left: `${e.pageX - clone_card.offsetWidth / 2}px`,
			boxShadow: "0 0.125rem 0.25rem #939393",
		});
	}
	function handleDragEnd(e) {
		e.target.classList.remove("opacity-0");
		clone_card.remove();
	}
	return (
		<div draggable onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd} className="flex flex-col gap-2 py-2 pl-2 pr-4 rounded bg-white">
			<div className="flex items-center justify-between">
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
