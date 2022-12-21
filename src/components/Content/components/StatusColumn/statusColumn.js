import { useRef, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
function StatusColumn({ name, amountCard, children }) {
	useEffect(() => {
		const dropFields = document.querySelectorAll(".dropField");
		dropFields.forEach((field) => {
			field.addEventListener("dragover", (e) => {
				e.preventDefault();
				field.classList.add("bg-slate-100");
			});
			field.addEventListener("dragleave", (e) => {
				e.preventDefault();
				field.classList.remove("bg-slate-100");
			});
			field.addEventListener("drop", (e) => {
				const grabbingCard = document.getElementById("grabbingCard");
				field.appendChild(grabbingCard);
				field.classList.remove("bg-slate-100");
			});
		});
	}, []);

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
				className="dropField flex flex-col gap-2 overflow-y-scroll h-full
				scrollbar hover:scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin
				scrollbar-thumb-rounded-full scrollbar-track-rounded-full duration-100 ease-linear"
			>
				{children}
			</div>
		</div>
	);
}

export default StatusColumn;
