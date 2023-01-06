import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Logo, Wave } from "../image/Image";
function Login() {
	const [login, SetLogin] = useState(false);
	const formName = login ? { main: "Sign up", reverse: "Log in", exist: "Don't have an account yet?", slogan: "Sometimes, we need to rest..." } : { main: "Log in", reverse: "Sign up", exist: "Already have an account?", slogan: "Work, work more, work forever!" };
	function requestAuth(event) {
		event.preventDefault();
		fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/auth/login`, { method: "POST" })
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("auth", data.auth);
				if (data.auth) {
					const URL = window.location;
					const newPath = `${URL.origin}/`;
					window.location.href = newPath;
				}
			});
	}

	return (
		<form onSubmit={requestAuth} className={[login ? "flex-row-reverse" : "flex-row", "select-none flex"].join(" ")}>
			<div className="grid place-items-center xl:w-1/2 w-screen h-screen">
				<div className="flex flex-col gap-6 items-center">
					<div className="flex flex-col items-center gap-4">
						<div className="animate-flyUp">
							<Logo w={88} h={88} />
						</div>
						<div className="flex flex-col items-center">
							<div className="text-lg font-bold text-slate-400">
								{formName.reverse} to <span className="text-slate-500">Todo-Task</span>
							</div>
							<div className="text-xs text-slate-400">{formName.slogan}</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<input className="text-center w-60 p-1 border border-solid border-slate-300 outline-none placeholder:text-xs selection:bg-slate-300 text-slate-500 focus:placeholder:text-transparent" placeholder="Email" type="email" spellCheck="false" required />
						<input className="text-center w-60 p-1 border border-solid border-slate-300 outline-none placeholder:text-xs selection:bg-slate-300 text-slate-500 focus:placeholder:text-transparent" minLength="10" maxLength="20" placeholder="Password" type="password" spellCheck="false" required />
					</div>
					<div>
						<button className="text-sm px-5 py-1 rounded-sm bg-slate-300 cursor-pointer hover:bg-slate-200" type="submit">
							Done!
						</button>
					</div>
					<div className="flex gap-1 items-center">
						<div className="flex gap-1 items-center text-slate-400">
							<div>{formName.exist}</div>
							<BsArrowRightShort />
						</div>
						<div onClick={() => SetLogin((pre) => (pre ? false : true))} className="text-sm font-bold text-sky-500 hover:text-sky-600">
							{formName.main}!
						</div>
					</div>
				</div>
			</div>
			<div className="xl:block hidden  w-1/2 h-screen bg-slate-100">
				<Wave />
			</div>
		</form>
	);
}

export default Login;