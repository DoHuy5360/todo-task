import { useContext, useRef, memo } from "react";
import { dialogContext } from "../../../../Context/DialogContext";
import { refreshContext } from "../../../../Context/RefreshContext";
import COOKIES from "../../../../test/class/COOKIES";

function Dialog() {
	// console.log("Dialog render");
	const { showDialog, setShowDialog, dialogStatus, dialogContent, setDialogContent } = useContext(dialogContext);
	const { setRefresh } = useContext(refreshContext);
	const cartStatus = useRef();
	const cartTitle = useRef();
	const cartDescription = useRef();
	const cardAddForm = useRef();
	const cookieBank = new COOKIES();
	function addNewCard(e) {
		e.preventDefault();
		const cardData = {
			status: cartStatus.current.innerText,
			title: cartTitle.current.value,
			description: cartDescription.current.value,
			token: cookieBank.give_me_value_of("token"),
		};
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/add-card`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cardData),
		})
			.then((res) => res.status)
			.then((status) => (status === 200 ? alert("Add successfully!") : alert("Add failure!")));
	}
	function updateCard(event) {
		event.preventDefault();
		const cardData = {
			status: cartStatus.current.innerText,
			title: cartTitle.current.value,
			description: cartDescription.current.value,
		};
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/${dialogContent._id}/update`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cardData),
		})
			.then((res) => res.status)
			.then((status) => (status === 200 ? alert("Update successfully!") : alert("Update failure!")));
	}
	return showDialog ? (
		<div className="fixed h-screen w-screen top-0 bg-slate-300/50">
			<form ref={cardAddForm} onSubmit={dialogContent._id ? updateCard : addNewCard} className="flex flex-col bg-white p-4 gap-3 xl:rounded fixed xl:w-[500px] w-full xl:h-[500px] h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-md">
				<div className="flex flex-col gap-2 h-[90%]">
					<div className="flex flex-col xl:h-1/5 h-[80px] gap-1">
						<label className="h-[30%] text-xl select-none" htmlFor="card-title">
							Title
						</label>
						<input ref={cartTitle} defaultValue={dialogContent.title} id="card-title" className="h-[70%] p-2 outline-none rounded bg-slate-100" type="text" tabIndex="1" required />
					</div>
					<div className="flex flex-col xl:h-4/5 h-[calc(100%-80px)] gap-1">
						<label className="h-[10%] max-h-[28px] text-xl select-none" htmlFor="card-desc">
							Description
						</label>
						<textarea ref={cartDescription} defaultValue={dialogContent.description} id="card-desc" className="resize-none p-2 h-[90%] outline-none rounded bg-slate-100" rows="" cols="" tabIndex="2"></textarea>
					</div>
				</div>
				<div className="flex justify-between items-center text-sm h-[10%]">
					<button
						onClick={(event) => {
							setRefresh();
							setDialogContent({});
							setShowDialog(false);
						}}
						className="bg-rose-300 text-black rounded px-3 py-2 select-none"
						type="button"
						tabIndex="4"
					>
						Close
					</button>
					<div ref={cartStatus} className="font-semibold select-none">
						{dialogContent.status || dialogStatus}
					</div>
					<div className="flex gap-3">
						<button
							onClick={() => {
								cartTitle.current.value = "";
								cartDescription.current.value = "";
								cartTitle.current.focus();
							}}
							className="bg-yellow-300 rounded px-3 py-2 select-none"
							type="button"
						>
							Clear
						</button>
						<button className="bg-green-300 rounded px-3 py-2 select-none" type="submit" tabIndex="3">
							Done
						</button>
					</div>
				</div>
			</form>
		</div>
	) : (
		<></>
	);
}

export default memo(Dialog);
