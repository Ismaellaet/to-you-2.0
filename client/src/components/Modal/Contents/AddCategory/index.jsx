import {
	Briefcase,
	Heartbeat,
	ShoppingCartSimple,
	User,
	XSquare,
} from "phosphor-react";

import { AddTask } from "../AddTask";

import "./styles.css";

export function AddCategory({ active, handleContent }) {
	const Category = props => (
		<li
			className="category"
			onClick={() => {
				handleContent(
					<AddTask
						category={props.name}
						Icon={props.Icon}
						active={active}
						handleContent={handleContent}
					/>
				);
			}}
		>
			<div className="icon">
				<props.Icon size={32} color="white" />
			</div>

			{props.name}
		</li>
	);

	return (
		<div className="modal category">
			<XSquare
				size={28}
				onClick={() => active(false)}
				className="close-button"
			/>

			<span>Choose category</span>

			<ul className="categories-group">
				<Category Icon={Briefcase} name="work" />
				<Category Icon={Heartbeat} name="health" />
				<Category Icon={ShoppingCartSimple} name="shopping" />
				<Category Icon={User} name="personal" />
			</ul>
		</div>
	);
}
