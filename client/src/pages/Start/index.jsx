import { Link } from "react-router-dom";

import { Logo } from "../../components/Logo";
import { Outlined } from "../../components/Buttons/Outlined";
import { Primary } from "../../components/Buttons/Primary";

import "./styles.css";

export function Start() {
	return (
		<div className="container">
			<div className="wrapper start">
				<div>
					<h1>Welcome to ToYou</h1>

					<span>
						Please login to your account or create new account to
						continue
					</span>
				</div>
				<Logo />

				<div className="buttons">
					<Link to="/login" className="button">
						<Primary text="login" />
					</Link>

					<Link to="/register" className="button">
						<Outlined text="create acount" />
					</Link>
				</div>
			</div>
		</div>
	);
}
