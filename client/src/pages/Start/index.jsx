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
					<PrimaryButton text="login" />
					<OutlinedButton text="create acount" />
				</div>
			</div>
		</div>
	);
}
