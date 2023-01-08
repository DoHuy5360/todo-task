import Logo from "../image/Logo";

function LogoAnimation() {
	return (
		<div className="grid place-items-center w-full h-screen">
			<div className="flex flex-col gap-2 items-center">
				<div className="animate-flyUp">
					<Logo square={120} />
				</div>
				<div className="text-slate-400 select-none flex gap-[1px]">
					<div className="text-md">Verifying</div>
					<div className="flex">
						<div className="animate-[dotWave_700ms_ease-in-out_000ms_infinite]">.</div>
						<div className="animate-[dotWave_700ms_ease-in-out_100ms_infinite]">.</div>
						<div className="animate-[dotWave_700ms_ease-in-out_300ms_infinite]">.</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LogoAnimation;
