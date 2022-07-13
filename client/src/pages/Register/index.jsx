import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import axios from "axios";

import { Primary } from "../../components/Buttons/Primary";

import "./styles.css";

export function Register() {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const [confirmPassword, setConfirmPassword] = useState();

	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		if (confirmPassword === credentials.password) {
			const URL = "http://localhost:5000/register";

			const token = await axios
				.post(URL, credentials)
				.then(res => res.data)
				.then(data => data.token)
				.catch(err => console.error(err));

			localStorage.setItem("token", JSON.stringify(token));

			navigate("/home", { replace: true });

			return;
		}

		console.log("Error => Passwords are not the same!");
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
						value={credentials.username}
						placeholder="Enter your Username"
						onChange={e =>
							setCredentials({
								...credentials,
								username: e.target.value,
							})
						}
					/>

					<label htmlFor="password" className="sr-only">
						Enter your Password
					</label>

					<input
						type="password"
						name="password"
						id="password"
						placeholder="Enter your Password"
						onChange={e =>
							setCredentials({
								...credentials,
								password: e.target.value,
							})
						}
					/>

					<label htmlFor="confirm-password" className="sr-only">
						Confirm your Password
					</label>

					<input
						type="password"
						name="confirmPassword"
						id="confirm-password"
						placeholder="Confirm your Password"
						onChange={e => setConfirmPassword(e.target.value)}
					/>

					<button>
						<Primary text="register" />
					</button>
				</form>
			</div>
		</div>
	);
}
