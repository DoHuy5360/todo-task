import { DndProvider } from "react-dnd";
import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/StatusColumn.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card/Card.js";
import { useCallback, useContext, useEffect, useState } from "react";
import Dialog from "./components/Dialog/Dialog.js";
import ContextMenu from "./components/ContextMenu/ContextMenu.js";
import ServerLoadingAnimation from "../../animation/ServerLoadingAnimation.js";
import COOKIES from "../../test/class/COOKIES.js";
import { refreshContext } from "../../Context/RefreshContext.js";
function Content() {
	const { refresh } = useContext(refreshContext);
	const [showContent, setShowContent] = useState(false);
	const [columns, setColumns] = useState([]);
	const cookieBank = new COOKIES();
	useEffect(() => {
		console.log("render");
		const token = cookieBank.give_me_value_of("token");
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/${token}`)
			.then((res) => res.json())
			.then((result) => {
				setColumns(result.columns);
				setShowContent(true);
			});
	}, [refresh]);
	if (!showContent) {
		return <ServerLoadingAnimation visible={true} />;
	} else {
		return (
			<DndProvider backend={HTML5Backend}>
				<div>
					<div className="overflow-hidden">
						<div className="flex items-baseline justify-between xl:py-8 py-1">
							<div className="text-2xl">Tasks</div>
							<div className="flex items-center gap-2 cursor-pointer">
								<div>This Week</div>
								<div>
									<MdKeyboardArrowDown />
								</div>
							</div>
						</div>
						<div className="flex xl:flex-row flex-col gap-4 h-full relative">
							{columns.map((column, colidx) => (
								<StatusColumn {...column} key={"column-" + colidx} colId={colidx}>
									{column.cards.map((card, idx) => (
										<Card {...card} key={`card-${colidx}-${idx}`} id={`card-${colidx}-${idx}`} colId={colidx} />
									))}
								</StatusColumn>
							))}
						</div>
					</div>
					<ContextMenu />
				</div>
				<Dialog />
			</DndProvider>
		);
	}
}

export default Content;
