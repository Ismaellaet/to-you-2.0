import { useState } from "react";
import { House, CalendarCheck, Plus } from "phosphor-react";

import { Modal } from "../Modal";

import "./styles.css";

export function NavBar() {
	const [activeModal, setActiveModal] = useState(false);
	return (
		<div className="bar">
			<a className="item">
				<House size={32} />
				Index
			</a>

			<button className="add-task" onClick={() => setActiveModal(true)}>
				<Plus size={32} color="white" />
			</button>

			<a className="item">
				<CalendarCheck size={32} />
				Calendar
			</a>

			{activeModal && <Modal active={setActiveModal} />}
		</div>
	);
}
