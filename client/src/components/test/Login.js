import { useRef, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Logo, Wave } from "../image/Image";
function Login() {
	const [login, SetLogin] = useState(true);
	const formName = login ? { main: "Sign up", reverse: "Log in", exist: "Don't have an account yet?", slogan: "Sometimes, we need to rest..." } : { main: "Log in", reverse: "Sign up", exist: "Already have an account?", slogan: "Work, work more, work forever!" };
	const emailForm = useRef();
	const password = useRef();
	function requestAuth(event) {
		const dataForm = {
			email: emailForm.current.value,
			password: password.current.value,
		};
		event.preventDefault();
		if (login) {
			fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/auth/login`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataForm),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data) {
						const { token, user } = data;
						document.cookie = `token=${token}; secure;`;
						document.cookie = `user=${JSON.stringify(user)}; secure;`;
						window.location.reload();
					}
				});
		} else {
			fetch(`${process.env.REACT_APP_DESTINATION_REQUEST}/new-user`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(dataForm),
			})
				.then((res) => res.json())
				.then((data) => {
					document.cookie = `token=${data.token}; secure;`;
				});
		}
	}
	function fastFill() {
		emailForm.current.value = "token@gmail.com";
		password.current.value = "0123456789";
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
						<input ref={emailForm} className="text-center w-60 p-1 border border-solid border-slate-300 outline-none placeholder:text-xs selection:bg-slate-300 text-slate-500 focus:placeholder:text-transparent" placeholder="Email" type="email" spellCheck="false" required />
						<input ref={password} className="text-center w-60 p-1 border border-solid border-slate-300 outline-none placeholder:text-xs selection:bg-slate-300 text-slate-500 focus:placeholder:text-transparent" minLength="10" maxLength="20" placeholder="Password" type="password" spellCheck="false" required />
					</div>
					<div className="flex gap-4 items-center">
						<button className="text-sm px-5 py-1 rounded-sm bg-slate-300 cursor-pointer hover:bg-slate-200" type="submit">
							Done!
						</button>
						<button className="bg-amber-400 text-sm rounded-sm px-5 py-1" onClick={fastFill} type="button">
							Fill
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
