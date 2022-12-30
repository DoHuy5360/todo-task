function Dialog({ statusColumn, visible, setShowDialog }) {
	return visible ? (
		<div className="flex flex-col bg-white p-4 gap-3 rounded fixed w-[500px] h-[500px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-md">
			<div className="flex flex-col gap-2 h-[90%]">
				<div className="flex flex-col h-1/5 gap-1">
					<label className="h-[30%] text-xl select-none" htmlFor="">
						Title
					</label>
					<input className="h-[70%] p-2 outline-none rounded bg-slate-100" type="" name="" />
				</div>
				<div className="flex flex-col h-4/5 gap-1">
					<label className="h-[10%] text-xl select-none" htmlFor="">
						Description
					</label>
					<textarea className="resize-none p-2 h-[90%] outline-none rounded bg-slate-100" rows="" cols=""></textarea>
				</div>
			</div>
			<div className="flex justify-between items-center text-sm h-[10%]">
				<button
					onClick={() => {
						setShowDialog(false);
					}}
					className="bg-rose-300 text-black rounded px-3 py-2 select-none"
					type="button"
				>
					Cancel
				</button>
				<div className="font-semibold select-none">{statusColumn}</div>
				<button className="bg-green-300 rounded px-3 py-2 select-none" type="button">
					Done
				</button>
			</div>
		</div>
	) : (
		<></>
	);
}

export default Dialog;
