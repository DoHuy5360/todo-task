import { GoPrimitiveDot } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { useDrag } from "react-dnd";

function Card({ _id, status, title, description, id, colId }) {
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
		const sameClass = " text-3xl";
		if (colId === 0) {
			return "text-rose-500" + sameClass;
		} else if (colId === 1) {
			return "text-amber-500" + sameClass;
		} else {
			return "text-green-500" + sameClass;
		}
	}
	return (
		<div id={id} ref={drag} className={(isDragging ? "opacity-50" : "opacity-100") + " card relative flex flex-col gap-2 py-2 pl-2 pr-4 rounded bg-white cursor-grab"}>
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center">
					<div className={cardCSS(colId)}>
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
