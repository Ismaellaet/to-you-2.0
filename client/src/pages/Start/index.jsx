import { Link } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { OutlinedButton } from "../../components/OutlinedButton";
import { PrimaryButton } from "../../components/PrimaryButton";

import "./styles.css";

export function Start() {
	return (
		<div className="container">
			<div className="wrapper">
				<div>
					<h1>Welcome to ToYou</h1>

					<span>
						Please login to your account or create new account to
						continue
					</span>
				</div>
				<Logo />

				<div className="buttons">
					<Link to="./Login" className="button">
						<PrimaryButton text="login" />
					</Link>

					<Link to="/" className="button">
						<OutlinedButton text="create acount" />
					</Link>
				</div>
			</div>
		</div>
	);
}
