import { useContext } from "react";
import { changeStatusContext } from "./ChangeStatus";

function Todo() {
	const { handleChangeCardStatus } = useContext(changeStatusContext);
	return (
		<div
			onClick={() => {
				handleChangeCardStatus("Todo");
			}}
			className="py-1 px-2 text-sm hover:bg-slate-100 cursor-pointer"
		>
			Todo
		</div>
	);
}

export default Todo;
