import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsQuestionCircle, BsBell } from "react-icons/bs";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { contextMenuContext } from "../../Context/ContextMenuProvider";
import { useContext } from "react";
import COOKIES from "../../test/class/COOKIES.js";
import { optionBoxContext } from "../../Context/OptionBoxContext";
import ChangeNameForm from "./components/ChangeNameForm";
function Header({ setShowSidebar }) {
	const { setShowContextMenu } = useContext(contextMenuContext);
	const { setLocation, setSelects, setShowOptionBox } = useContext(optionBoxContext);
	function handleShowSidebar() {
		setShowContextMenu({
			visible: false,
			dataEvent: null,
		});
		setShowSidebar((pre) => (pre ? false : true));
	}
	function handleShowOptionBox(event) {
		event.stopPropagation();
		setSelects([ChangeNameForm]);
		setLocation({
			direction: {
				locationY: "bottom",
				locationX: "left",
			},
			dataEvent: event,
		});
		setShowOptionBox(true);
	}
	const cookieBank = new COOKIES();
	const { name } = cookieBank.convert_this_to_json(cookieBank.give_me_value_of("user"));
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
				<div onClick={handleShowOptionBox} className="flex gap-2 items-center cursor-pointer py-1 px-2 active:bg-slate-100 hover:bg-slate-50 hover:rounded-sm">
					<input className="cursor-pointer text-sm" value={name} type="button" />
					<MdKeyboardArrowDown />
				</div>
				<FaRegUserCircle />
			</div>
		</div>
	);
}

export default Header;
