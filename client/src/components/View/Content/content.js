import { DndProvider } from "react-dnd";
import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/StatusColumn.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card/Card.js";
import { useContext, useEffect, useState } from "react";
import Dialog from "./components/Dialog/Dialog.js";
import ContextMenu from "./components/ContextMenu/ContextMenu.js";
import { contextMenuContext } from "../../Context/ContextMenuProvider.js";
import ServerLoadingAnimation from "../../animation/ServerLoadingAnimation.js";
function Content() {
	const [content, setContent] = useState(false);
	const [columns, setColumns] = useState([]);
	const [animationLoading, setAnimationLoading] = useState(true);
	const token =
		document.cookie
			.split(";")
			.filter((key) => {
				return key.split("=")[0].trim() == "token";
			})[0]
			?.split("=")[1] || console.warn("Invalid token key");
	useEffect(() => {
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/${token}`)
			.then((res) => res.json())
			.then((result) => {
				setColumns(result.columns);
				setAnimationLoading(false);
			});
	}, [content]);
	const { showContextMenu } = useContext(contextMenuContext);
	const [cardsIdContextMenu, setCardsIdContextMenu] = useState("");
	const [showDialog, setShowDialog] = useState(false);
	const [dialogStatus, setDialogStatus] = useState("");
	const [dialogContent, setDialogContent] = useState({});
	return (
		<DndProvider backend={HTML5Backend}>
			<ServerLoadingAnimation visible={animationLoading} />
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
							<StatusColumn {...column} key={"column-" + colidx} colId={colidx} setContent={setContent} setShowDialog={setShowDialog} setDialogStatus={setDialogStatus}>
								{column.cards.map((card, idx) => (
									<Card {...card} key={`card-${colidx}-${idx}`} id={`card-${colidx}-${idx}`} colId={colidx} setCardsIdContextMenu={setCardsIdContextMenu} />
								))}
							</StatusColumn>
						))}
					</div>
				</div>

				<ContextMenu visible={showContextMenu.visible} dataEvent={showContextMenu.dataEvent} cardData={cardsIdContextMenu} setContent={setContent} setShowDialog={setShowDialog} setDialogContent={setDialogContent} />
			</div>
			<Dialog statusColumn={dialogStatus} visible={showDialog} setContent={setContent} setShowDialog={setShowDialog} dialogContent={dialogContent} setDialogContent={setDialogContent} />
		</DndProvider>
	);
}

export default Content;
