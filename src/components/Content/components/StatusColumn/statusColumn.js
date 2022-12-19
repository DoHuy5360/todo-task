import { AiOutlinePlus } from "react-icons/ai";
function StatusColumn({ name, amountCard, children }) {
	return (
		<div className="flex flex-col gap-2 bg-slate-300 w-full p-2 rounded h-5/6 pb-4 overflow-hidden">
			<div>
				<div className="flex items-center justify-between py-2">
					<div>{name}</div>
					<div>{amountCard}</div>
				</div>
				<div className="grid place-items-center p-2 bg-white rounded cursor-pointer">
					<AiOutlinePlus />
				</div>
			</div>
			<div className="flex flex-col gap-2 overflow-y-scroll h-full pb-2">{children}</div>
		</div>
	);
}

export default StatusColumn;
