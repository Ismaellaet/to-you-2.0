import { House, CalendarCheck, Plus } from "phosphor-react";
import { useState } from "react";
import { AddTask } from "../../components/Modals/AddTask";

import "./styles.css";

export function NavBar() {
	const [active, setActive] = useState(false);
	return (
		<div className="bar">
			<a className="item">
				<House size={32} />
				Index
			</a>

			<button className="add-task" onClick={() => setActive(true)}>
				<Plus size={32} color="white" />
			</button>

			<a className="item">
				<CalendarCheck size={32} />
				Calendar
			</a>

			{active && <AddTask active={setActive} />}
		</div>
	);
}
