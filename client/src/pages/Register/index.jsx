import { useState } from "react";
import { Link } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import axios from "axios";

import { PrimaryButton } from "../../components/PrimaryButton";

import "./styles.css";

export function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	async function handleSubmit(event) {
		event.preventDefault();
		const URL = "http://localhost:5000/register";

		if (confirmPassword === password) {
			await axios
				.post(URL, {
					username,
					password,
				})
				.then(res => console.log(res))
				.catch(error => console.error(error));

			return;
		}

		console.log("Passwords are not the same");
	}

	return (
		<div className="container">
			<div className="wrapper register">
				<Link to="/login">
					<CaretLeft size={32} color="var(--border)" />
				</Link>

				<h2>Register</h2>

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

					<label htmlFor="password" className="sr-only">
						Confirm your Password
					</label>

					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						placeholder="Confirm your Password"
						onChange={e => setConfirmPassword(e.target.value)}
					/>

					<button>
						<PrimaryButton text="register" />
					</button>
				</form>
			</div>
		</div>
	);
}
