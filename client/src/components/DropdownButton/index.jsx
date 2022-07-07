import { CaretDown } from "phosphor-react";
import { useState } from "react";

import "./styles.css";

export function DropdownButton(props) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="dropdown-button" onClick={() => setOpen(!open)}>
				{props.name}
				<CaretDown />
			</div>

			{open && props.children}
		</>
	);
}
