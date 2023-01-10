import { useRef } from "react";
import COOKIES from "../../../test/class/COOKIES";

function ChangeNameForm() {
	const userName = useRef();
	const cookieBank = new COOKIES();
	const { name } = cookieBank.convert_this_to_json(cookieBank.give_me_value_of("user"));
	function handleChangeName(event) {
		event.preventDefault();
		const token = cookieBank.give_me_value_of("token");
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/user/update-name`, {
			method: "POST",
			headers: {
				accept: "Application/json",
				"Content-Type": "Application/json",
			},
			body: JSON.stringify({ token, name: userName.current.value.trim() }),
		})
			.then((res) => res.json())
			.then((data) => {
				cookieBank.store_these_cookies({ user: JSON.stringify(data) });
			});
	}
	return (
		<form onSubmit={handleChangeName} className="flex flex-col gap-1">
			<label className="text-sm text-slate-400" htmlFor="change-name">
				Change name
			</label>
			<div className="flex gap-1">
				<input ref={userName} defaultValue={name} className="border-[1px] border-slate-200 outline-none px-2 py-1 text-slate-500 text-sm focus:placeholder:text-transparent" id="change-name" type="text" maxLength="20" placeholder="New name" required spellCheck="false" />
				<input className="text-sm text-slate-500 bg-slate-100 hover:bg-slate-200 active:bg-slate-100 px-2 rounded-sm cursor-pointer" type="submit" value="Submit" />
			</div>
		</form>
	);
}

export default ChangeNameForm;
