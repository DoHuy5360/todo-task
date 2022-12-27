import { DndProvider } from "react-dnd";
import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/StatusColumn.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card/Card.js";
import { useState } from "react";
const listColumns = [
	{ name: "Todo", amountCard: 32 },
	{ name: "In Progress", amountCard: 452 },
	{ name: "Completed", amountCard: 1 },
];
export const listCards = [
	{ id: 0, status: 0, title: "123a", description: "Lorem" },
	{ id: 1, status: 0, title: "123b", description: "Lorem" },
	{ id: 2, status: 0, title: "123c", description: "Lorem" },
	{ id: 3, status: 0, title: "123d", description: "Lorem" },
	{ id: 4, status: 0, title: "123e", description: "Lorem" },
	{ id: 5, status: 1, title: "456a", description: "Lorem" },
	{ id: 6, status: 1, title: "456b", description: "Lorem" },
	{ id: 7, status: 1, title: "456c", description: "Lorem" },
	{ id: 8, status: 2, title: "789a", description: "Lorem" },
];
function Content() {
	const [refresh, setRefresh] = useState(false);
	return (
		<DndProvider backend={HTML5Backend}>
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
				<div className="flex gap-4 h-full">
					{listColumns.map((column, colidx) => (
						<StatusColumn name={column.name} amountCard={column.amountCard} key={"column-" + colidx} colId={colidx} onRefresh={setRefresh}>
							{listCards.map((card, idx) => {
								if (card.status === colidx) {
									return <Card title={card.title} description={card.description} key={"card-" + colidx + "-" + idx} id={"card-" + colidx + "-" + idx} status={card.status} cardId={card.id} index={idx}></Card>;
								}
							})}
						</StatusColumn>
					))}
				</div>
			</div>
		</DndProvider>
	);
}

export default Content;
