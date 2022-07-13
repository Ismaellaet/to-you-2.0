import {
	Briefcase,
	Heartbeat,
	ShoppingCartSimple,
	User,
	XSquare,
} from "phosphor-react";
import { Primary } from "../../Buttons/Primary";

import "./styles.css";

export function AddCategory({ active }) {
	function Category(props) {
		return (
			<li className="category">
				<div className="img">
					<props.icon size={32} color="white" />
				</div>

				{props.name}
			</li>
		);
	}

	return (
		<div className="modal-overlay">
			<div className="modal category">
				<XSquare
					size={28}
					onClick={() => active(false)}
					className="cancel-button"
				/>

				<span>Choose a category</span>

				<ul className="categories-group">
					<Category icon={Briefcase} name="work" />
					<Category icon={Heartbeat} name="health" />
					<Category icon={ShoppingCartSimple} name="shopping" />
					<Category icon={User} name="personal" />
				</ul>

				<Primary text="add category" />
			</div>
		</div>
	);
}
