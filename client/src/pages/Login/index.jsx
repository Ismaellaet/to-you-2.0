import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaretLeft } from "phosphor-react";

import { Outlined } from "../../components/Buttons/Outlined";
import { Primary } from "../../components/Buttons/Primary";

import "./styles.css";
import axios from "axios";

export function Login() {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		const URL = "http://localhost:5000/login";

		const token = await axios
			.post(URL, credentials)
			.then(res => res.data)
			.then(data => data.token)
			.catch(err => console.error(err));

		localStorage.setItem("token", JSON.stringify(token));

		navigate("/home", { replace: true });
	}

	return (
		<div className="container">
			<div className="wrapper login">
				<Link to="/">
					<CaretLeft size={32} color="var(--border)" />
				</Link>

				<h2>Login</h2>
				<form className="login-form" onSubmit={handleSubmit}>
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

					<button>
						<Primary text="login" />
					</button>
				</form>

				<div className="separator">
					<div className="line"></div>
					<div>or</div>
					<div className="line"></div>
				</div>

				<Link to="/Register" className="button">
					<Outlined text="register" />
				</Link>
			</div>
		</div>
	);
}
