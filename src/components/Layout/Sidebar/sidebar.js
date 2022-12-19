import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BsBarChartLine, BsChatLeftDots, BsCalendar3 } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";

function Sidebar() {
	return (
		<div className="bg-slate-400 flex flex-col p-7 h-screen">
			<div className="h-32">Logo</div>
			<div>
				<div className="flex gap-2 items-center">
					<IoHomeOutline />
					<span>Overview</span>
				</div>
				<div className="flex gap-2 items-center">
					<BsBarChartLine />
					<span>Start</span>
				</div>
				<div className="flex gap-2 items-center">
					<AiOutlineFolderOpen />
					<span>Projects</span>
				</div>
				<div className="flex gap-2 items-center">
					<BsChatLeftDots />
					<span>Chat</span>
				</div>
				<div className="flex gap-2 items-center">
					<BsCalendar3 />
					<span>Calendar</span>
				</div>
			</div>
			<div>
				<div className="flex gap-2 items-center">
					<IoSettingsOutline />
					<span>Setting</span>
				</div>
				<div className="flex gap-2 items-center">
					<IoIosLogOut />
					<span>Logout</span>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
