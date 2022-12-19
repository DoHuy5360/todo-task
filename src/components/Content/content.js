import { MdKeyboardArrowDown } from "react-icons/md";
import StatusColumn from "./components/StatusColumn/statusColumn.js";
import Card from "./components/Card/card.js";
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
				<StatusColumn name="Todo" amountCard="32">
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
				</StatusColumn>
				<StatusColumn name="In Progress" amountCard="41">
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
				</StatusColumn>
				<StatusColumn name="Completed" amountCard="51">
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
					<Card title="Design" description="Lorem text"></Card>
				</StatusColumn>
			</div>
		</div>
	);
}

export default Content;
