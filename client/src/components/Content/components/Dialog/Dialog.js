import { useRef } from "react";

function Dialog({ statusColumn, visible, setContent, setShowDialog, dialogContent, setDialogContent }) {
	const cartStatus = useRef();
	const cartTitle = useRef();
	const cartDescription = useRef();
	const cardAddForm = useRef();
	function addNewCard(e) {
		e.preventDefault();
		const cardData = {
			status: cartStatus.current.innerText,
			title: cartTitle.current.value,
			description: cartDescription.current.value,
		};
		fetch("http://localhost:4000/add-card", {
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
		fetch(`http://localhost:4000/${dialogContent._id}/update`, {
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
	return visible ? (
		<form action="" ref={cardAddForm} onSubmit={dialogContent ? updateCard : addNewCard} className="flex flex-col bg-white p-4 gap-3 rounded fixed w-[500px] h-[500px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-md">
			<div className="flex flex-col gap-2 h-[90%]">
				<div className="flex flex-col h-1/5 gap-1">
					<label className="h-[30%] text-xl select-none" htmlFor="">
						Title
					</label>
					<input ref={cartTitle} defaultValue={dialogContent.title} className="h-[70%] p-2 outline-none rounded bg-slate-100" type="text" tabIndex="1" required />
				</div>
				<div className="flex flex-col h-4/5 gap-1">
					<label className="h-[10%] text-xl select-none" htmlFor="">
						Description
					</label>
					<textarea ref={cartDescription} defaultValue={dialogContent.description} className="resize-none p-2 h-[90%] outline-none rounded bg-slate-100" rows="" cols="" tabIndex="2"></textarea>
				</div>
			</div>
			<div className="flex justify-between items-center text-sm h-[10%]">
				<button
					onClick={(event) => {
						setContent((pre) => {
							return pre ? false : true;
						});
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
					{dialogContent.status || statusColumn}
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
	) : (
		<></>
	);
}

export default Dialog;
