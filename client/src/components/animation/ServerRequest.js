import { BsDot } from "react-icons/bs";
function ServerRequest({ visible }) {
	return visible ? (
		<div className="flex xl:flex-row flex-col-reverse items-center justify-center gap-10 fixed xl:w-full w-[calc(100%-30px)] h-full">
			<div>
				<div className="w-24 h-14 p-1 bg-slate-400 rounded-sm">
					<div className="w-full h-full bg-slate-300 rounded-sm"></div>
				</div>
				<div className="flex flex-col items-center">
					<div className="w-2 h-4 bg-slate-500"></div>
					<div className="w-10 h-1 rounded-tr-full rounded-tl-full bg-slate-400"></div>
				</div>
			</div>
			<div className="flex xl:flex-row flex-col gap-10">
				<BsDot className="animate-[dotScale_500ms_alternate_200ms_infinite] text-slate-400" />
				<BsDot className="animate-[dotScale_500ms_alternate_400ms_infinite] text-slate-400" />
				<BsDot className="animate-[dotScale_500ms_alternate_600ms_infinite] text-slate-400" />
			</div>
			<div className="flex flex-col w-40 h-fit p-3 gap-3 bg-slate-400 rounded-sm drop-shadow-lg">
				<div className="flex gap-2 items-center">
					<BsDot className="animate-ledBlink" />
					<div className="bg-slate-300 h-4 w-32 rounded-sm"></div>
				</div>
				<div className="flex gap-2 items-center">
					<BsDot className="animate-[ledBlink_500ms_infinite]" />
					<div className="bg-slate-300 h-4 w-32 rounded-sm"></div>
				</div>
				<div className="flex gap-2 items-center">
					<BsDot className="animate-[ledBlink_800ms_infinite]" />
					<div className="bg-slate-300 h-4 w-32 rounded-sm"></div>
				</div>
				<div className="flex gap-2 items-center">
					<BsDot className="animate-[ledBlink_600ms_infinite]" />
					<div className="bg-slate-300 h-4 w-32 rounded-sm"></div>
				</div>
				<div className="flex gap-2 items-center">
					<BsDot className="animate-[ledBlink_200ms_infinite]" />
					<div className="bg-slate-300 h-4 w-32 rounded-sm"></div>
				</div>
				<div className="flex gap-2 items-center">
					<BsDot className="animate-[ledBlink_700ms_infinite]" />
					<div className="bg-slate-300 h-4 w-32 rounded-sm"></div>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}

export default ServerRequest;
