import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BsBarChartLine, BsChatLeftDots, BsCalendar3 } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar() {
	return (
		<div className="bg-slate-400 flex flex-col xl:p-7 px-3 py-5 xl:h-screen h-full">
			<div className="xl:whitespace-nowrap whitespace-normal">Todo Task</div>
			<div className="flex flex-col gap-4 grow mt-20 xl:items-start items-center">
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/">
						<IoHomeOutline />
						<div className="xl:block hidden">Overview</div>
					</Link>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/start">
						<BsBarChartLine />
						<div className="xl:block hidden">Start</div>
					</Link>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/projects">
						<AiOutlineFolderOpen />
						<div className="xl:block hidden">Projects</div>
					</Link>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/chat">
						<BsChatLeftDots />
						<div className="xl:block hidden">Chat</div>
					</Link>
					<div className="hidden bg-red-400 text-white rounded w-fit h-full px-2 grid grid-cols-1 place-items-center text-xs">3</div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/calendar">
						<BsCalendar3 />
						<div className="xl:block hidden">Calendar</div>
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-4 xl:items-start items-center">
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/setting">
						<IoSettingsOutline />
						<div className="xl:block hidden">Setting</div>
					</Link>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<Link className="flex gap-4 items-center" to="/logout">
						<IoIosLogOut />
						<div className="xl:block hidden">Logout</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
