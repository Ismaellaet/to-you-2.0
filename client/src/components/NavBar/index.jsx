import { House, CalendarCheck, Plus } from "phosphor-react";

import "./styles.css";

export function NavBar() {
	return (
		<div className="bar">
			<a className="item">
				<House size={32} />
				Index
			</a>

			<button className="circle">
				<Plus size={32} color="white" />
			</button>

			<a className="item">
				<CalendarCheck size={32} />
				Calendar
			</a>
		</div>
	);
}
