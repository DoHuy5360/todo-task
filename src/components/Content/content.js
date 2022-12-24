import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/statusColumn.js";
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
				<StatusColumn name="Todo" amountCard="32" id="0"></StatusColumn>
				<StatusColumn name="In Progress" amountCard="41" id="1"></StatusColumn>
				<StatusColumn name="Completed" amountCard="51" id="2"></StatusColumn>
			</div>
		</div>
	);
}

export default Content;
