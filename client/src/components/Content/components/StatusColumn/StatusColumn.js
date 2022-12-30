import { useDrop } from "react-dnd";
import { AiOutlinePlus } from "react-icons/ai";

function StatusColumn({ name, amountCard, colId, setContent, setShowDialog, setDialogStatus, children }) {
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: (item, monitor) => {
			fetch(`http://localhost:4000/update-card/${item._id}/attr?status=${name}`).then((res) =>
				res.status === 200
					? setContent((pre) => {
							return pre ? false : true;
					  })
					: null
			);
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});
	return (
		<div className="flex flex-col gap-2 bg-slate-300 w-full p-2 rounded h-[560px] pb-4 overflow-hidden">
			<div className="select-none">
				<div className="flex items-center justify-between py-2">
					<div>{name}</div>
					<div>{amountCard}</div>
				</div>
				<div
					onClick={() => {
						setShowDialog(true);
						setDialogStatus(name);
					}}
					className="grid place-items-center p-2 bg-white rounded cursor-pointer"
				>
					<AiOutlinePlus />
				</div>
			</div>
			<div id={colId} ref={drop} className={(isOver ? "bg-slate-200" : "bg-transparent") + " dropField flex flex-col gap-2 overflow-y-scroll h-full hover:scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full duration-100 ease-linear"}>
				{children}
			</div>
		</div>
	);
}

export default StatusColumn;
