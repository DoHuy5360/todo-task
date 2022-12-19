import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BsBarChartLine, BsChatLeftDots, BsCalendar3 } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

function Sidebar() {
	return (
		<div className="bg-slate-400 flex flex-col p-7 h-screen w-60">
			<div className="">Todo Task</div>
			<div className="flex flex-col gap-4 grow mt-20">
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<IoHomeOutline />
						<span>Overview</span>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsBarChartLine />
						<span>Start</span>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<AiOutlineFolderOpen />
						<span>Projects</span>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsChatLeftDots />
						<span>Chat</span>
					</div>
					<div className="bg-red-400 text-white rounded w-fit h-full px-2 grid grid-cols-1 place-items-center text-xs">3</div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsCalendar3 />
						<span>Calendar</span>
					</div>
					<div></div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<IoSettingsOutline />
						<span>Setting</span>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<IoIosLogOut />
						<span>Logout</span>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
