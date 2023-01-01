import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BsBarChartLine, BsChatLeftDots, BsCalendar3 } from "react-icons/bs";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { Link } from "react-router-dom";
function Sidebar() {
	return (
		<div className="bg-slate-400 flex flex-col p-7 h-screen w-60">
			<div className="">Todo Task</div>
			<div className="flex flex-col gap-4 grow mt-20">
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<IoHomeOutline />
						<Link to="/">Overview</Link>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsBarChartLine />
						<Link to="/start">Start</Link>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<AiOutlineFolderOpen />
						<Link to="/projects">Projects</Link>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsChatLeftDots />
						<Link to="/chat">Chat</Link>
					</div>
					<div className="bg-red-400 text-white rounded w-fit h-full px-2 grid grid-cols-1 place-items-center text-xs">3</div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsCalendar3 />
						<Link to="/calendar">Calendar</Link>
					</div>
					<div></div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<IoSettingsOutline />
						<Link to="/setting">Setting</Link>
					</div>
					<div></div>
				</div>
				<div className="flex items-center cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<IoIosLogOut />
						<span>Logout</span>
						{/* <Link to="/logout">Logout</Link> */}
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
