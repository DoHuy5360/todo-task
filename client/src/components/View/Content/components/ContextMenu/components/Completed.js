import { useContext } from "react";
import { changeStatusContext } from "./ChangeStatus";
function Completed() {
	const { handleChangeCardStatus } = useContext(changeStatusContext);
	return (
		<div
			onClick={() => {
				handleChangeCardStatus("Completed");
			}}
			className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer"
		>
			Completed
		</div>
	);
}

export default Completed;
