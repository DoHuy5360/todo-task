import { DndProvider } from "react-dnd";
import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/StatusColumn.js";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card/Card.js";
import { useEffect, useState } from "react";

function Content() {
	const [refresh, setRefresh] = useState(false);
	const [columns, setColumns] = useState([]);
	const [cards, setCards] = useState([]);
	useEffect(() => {
		fetch("http://localhost:4000")
			.then((res) => res.json())
			.then((result) => {
				setColumns(result.columns);
				setCards(result.cards);
			});
	}, [refresh]);
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
					{columns.map((column, colidx) => (
						<StatusColumn name={column.name} amountCard={column.amountCard} key={"column-" + colidx} colId={colidx} onRefresh={setRefresh}>
							{cards.map((card, idx) => {
								if (card.status == colidx) {
									return <Card title={card.title} description={card.description} key={"card-" + colidx + "-" + idx} id={"card-" + colidx + "-" + idx} status={card.status} cardId={card._id} index={idx}></Card>;
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
