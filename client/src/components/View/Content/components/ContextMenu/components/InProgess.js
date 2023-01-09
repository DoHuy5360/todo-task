import { useContext } from "react";
import { changeStatusContext } from "./ChangeStatus";
function InProgess() {
	const { handleChangeCardStatus } = useContext(changeStatusContext);
	return (
		<div
			onClick={() => {
				handleChangeCardStatus("In Progress");
			}}
			className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer whitespace-nowrap"
		>
			In progress
		</div>
	);
}

export default InProgess;
