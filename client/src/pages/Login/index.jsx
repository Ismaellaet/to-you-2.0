import { useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

import { OutlinedButton } from "../../components/OutlinedButton";
import { PrimaryButton } from "../../components/PrimaryButton";

import "./styles.css";

export function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState();

	function handleSubmit(event) {
		event.preventDefault();
		console.log(`
		Username => ${username}
		Password => ${password}`);
	}

	return (
		<div className="container">
			<div className="wrapper login">
				<Link to="/">
					<CaretLeft size={32} color="var(--border)" />
				</Link>

				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="username" className="sr-only">
						Enter your Username :
					</label>

					<input
						type="text"
						id="username"
						name="username"
						value={username}
						placeholder="Enter your Username"
						onChange={e => setUsername(e.target.value)}
					/>

					<label htmlFor="password" className="sr-only">
						Enter your Password
					</label>

					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter your Password"
						onChange={e => setPassword(e.target.value)}
					/>

					<button>
						<PrimaryButton text="login" />
					</button>
				</form>

				<div className="separator">
					<div className="line"></div>
					<div>or</div>
					<div className="line"></div>
				</div>

				<Link to="/" className="button">
					<OutlinedButton text="register" />
				</Link>
			</div>
		</div>
	);
}
