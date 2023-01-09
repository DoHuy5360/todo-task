import Todo from "./Todo";
import InProgess from "./InProgess";
import Completed from "./Completed";
import { createContext, useContext } from "react";
import CARD from "../../../../../test/class/CARD.js";
import { contextMenuContext } from "../../../../../Context/ContextMenuProvider";
import { refreshContext } from "../../../../../Context/RefreshContext";

const changeStatusContext = createContext();
function ChangeStatus({ _id, currentStatus }) {
	const { setRefresh } = useContext(refreshContext);
	const { setShowContextMenu } = useContext(contextMenuContext);
	function handleChangeCardStatus(status) {
		const cardBank = new CARD();
		cardBank
			.update_this_card_status(_id, status)
			.then(() => {
				setRefresh((pre) => {
					return pre ? false : true;
				});
				setShowContextMenu({
					visible: false,
					dataEvent: null,
				});
			})
			.catch();
	}
	const statusBtns = {
		Todo: (
			<>
				<InProgess />
				<Completed />
			</>
		),
		"In Progress": (
			<>
				<Todo />
				<Completed />
			</>
		),
		Completed: (
			<>
				<InProgess />
				<Todo />
			</>
		),
	};
	return <changeStatusContext.Provider value={{ handleChangeCardStatus }}>{statusBtns[currentStatus]}</changeStatusContext.Provider>;
}

export { ChangeStatus, changeStatusContext };
