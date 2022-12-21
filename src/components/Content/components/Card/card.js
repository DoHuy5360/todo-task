import { useRef, useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
function Card({ title, description }) {
	useEffect(() => {
		let cloneCard;
		let originCard;
		const cards = document.querySelectorAll(".card");
		cards.forEach((card) => {
			card.addEventListener("dragstart", (e) => {
				originCard = card;
				cloneCard = originCard.cloneNode(true);
				originCard.classList.add("opacity-0");
				originCard.id = "grabbingCard";
				originCard.parentNode.appendChild(cloneCard);
			});
			card.addEventListener("drag", (e) => {
				Object.assign(cloneCard.style, {
					position: "fixed",
					top: `${e.pageY}px`,
					left: `${e.pageX}px`,
					boxShadow: "0 0.125rem 0.25rem #939393",
					zIndex: 9999,
					transform: "translate(-100%, -100%)",
				});
			});
			card.addEventListener("dragend", (e) => {
				originCard.id = "";
				originCard.classList.remove("opacity-0");
				cloneCard.remove();
			});
		});
	}, []);
	return (
		<div draggable className="card relative flex flex-col gap-2 py-2 pl-2 pr-4 rounded bg-white cursor-grab">
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
