import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsQuestionCircle, BsBell } from "react-icons/bs";

function Header() {
	return (
		<div className="flex gap-10 items-center justify-between">
			<div className="flex gap-2 items-center w-full h-full">
				<FiSearch />
				<input className="select-all w-full pl-2 h-full text-xs" type="text" name="" placeholder="Search..." />
			</div>
			<div className="flex items-center gap-4">
				<BsQuestionCircle />
				<BsBell />
				<div className="flex items-center">
					<span>DoHuy5360</span>
					<MdKeyboardArrowDown />
				</div>
				<FaRegUserCircle />
			</div>
		</div>
	);
}

export default Header;
