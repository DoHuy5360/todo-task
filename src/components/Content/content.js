import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/StatusColumn.js";
const listColumns = [
	{ name: "Todo", amountCard: 32 },
	{ name: "In Progress", amountCard: 452 },
	{ name: "Completed", amountCard: 1 },
];
function Content() {
	return (
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
				{listColumns.map((column, idx) => (
					<StatusColumn name={column.name} amountCard={column.amountCard} key={"column-" + idx} id={idx}></StatusColumn>
				))}
			</div>
		</div>
	);
}

export default Content;
