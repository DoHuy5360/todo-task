import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsQuestionCircle, BsBell } from "react-icons/bs";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
function Header({ setShowSidebar }) {
	function handleShowSidebar() {
		setShowSidebar((pre) => (pre ? false : true));
	}
	return (
		<div className="flex gap-3 items-center justify-between xl:pt-7 xl:px-7 py-4 px-4">
			<div onClick={handleShowSidebar} className="cursor-pointer">
				<BsLayoutTextSidebarReverse />
			</div>
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
