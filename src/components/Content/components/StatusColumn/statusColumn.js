import { useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../Card/Card";

const listcard = [
	[
		{ title: "123a", description: "Lorem" },
		{ title: "123b", description: "Lorem" },
		{ title: "123c", description: "Lorem" },
		{ title: "123d", description: "Lorem" },
		{ title: "123e", description: "Lorem" },
	],
	[
		{ title: "456a", description: "Lorem" },
		{ title: "456b", description: "Lorem" },
		{ title: "456c", description: "Lorem" },
	],
	[{ title: "789a", description: "Lorem" }],
];

function StatusColumn({ name, amountCard, id }) {
	const column = useRef();
	function handleDragOver(e) {
		e.preventDefault();
		column.current.classList.add("border-slate-600");
	}
	function handleDragLeave(e) {
		column.current.classList.remove("border-slate-600");
	}
	function handleDrop(e) {
		console.log(`Droped to: %c${name}`, "color: blue; font-weight: bold");
		column.current.classList.remove("border-slate-600");
		const cardId = e.dataTransfer.getData("Text");
		const cardSelected = document.getElementById(cardId);
		column.current.appendChild(cardSelected);
	}
	return (
		<div className="flex flex-col gap-2 bg-slate-300 w-full p-2 rounded h-[560px] pb-4 overflow-hidden">
			<div className="select-none">
				<div className="flex items-center justify-between py-2">
					<div>{name}</div>
					<div>{amountCard}</div>
				</div>
				<div className="grid place-items-center p-2 bg-white rounded cursor-pointer">
					<AiOutlinePlus />
				</div>
			</div>
			<div
				ref={column}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				className="dropField flex flex-col gap-2 overflow-y-scroll h-full border-2 border-transparent
				scrollbar hover:scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin
				scrollbar-thumb-rounded-full scrollbar-track-rounded-full duration-100 ease-linear"
			>
				{listcard[id].map((card, idx) => (
					<Card title={card.title} description={card.description} key={"card-" + id + "-" + idx} id={"card-" + id + "-" + idx}></Card>
				))}
			</div>
		</div>
	);
}

export default StatusColumn;
