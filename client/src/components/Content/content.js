import { DndProvider } from "react-dnd";
import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/StatusColumn.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card/Card.js";
import { useEffect, useRef, useState } from "react";
import Dialog from "./components/Dialog/Dialog.js";
import ContextMenu from "./components/ContextMenu/ContextMenu.js";
function Content() {
	const [content, setContent] = useState(false);
	const [columns, setColumns] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000")
			.then((res) => res.json())
			.then((result) => {
				setColumns(result.columns);
			});
	}, [content]);
	const [showContextMenu, setShowContextMenu] = useState({
		visible: false,
		dataEvent: null,
	});
	function handleShowContextMenu(event) {
		event.stopPropagation();
		event.preventDefault();

		setShowContextMenu({
			visible: true,
			dataEvent: event,
		});
	}
	function handleCloseContextMenu(event) {
		event.preventDefault();

		setShowContextMenu({
			visible: false,
			dataEvent: null,
		});
	}
	const [showDialog, setShowDialog] = useState(false);
	const [dialogStatus, setDialogStatus] = useState("");
	return (
		<DndProvider backend={HTML5Backend}>
			<div onClick={handleCloseContextMenu} onContextMenu={handleCloseContextMenu}>
				<div className="overflow-hidden">
					<div className="flex items-baseline justify-between py-8">
						<div className="text-2xl">Title</div>
						<div className="flex items-center gap-2 cursor-pointer">
							<div>This Week</div>
							<div>
								<MdKeyboardArrowDown />
							</div>
						</div>
					</div>
					<div className="flex gap-4 h-full relative">
						{columns.map((column, colidx) => (
							<StatusColumn {...column} key={"column-" + colidx} colId={colidx} setContent={setContent} setShowDialog={setShowDialog} setDialogStatus={setDialogStatus}>
								{column.cards.map((card, idx) => (
									<Card {...card} key={`card-${colidx}-${idx}`} id={`card-${colidx}-${idx}`} colId={colidx} handleShowContextMenu={handleShowContextMenu} />
								))}
							</StatusColumn>
						))}
					</div>
				</div>

				<ContextMenu visible={showContextMenu.visible} dataEvent={showContextMenu.dataEvent} />
				<Dialog statusColumn={dialogStatus} visible={showDialog} setContent={setContent} setShowDialog={setShowDialog} />
			</div>
		</DndProvider>
	);
}

export default Content;
