import { useState, useEffect } from "react";

import { AddCategory } from "./Contents/AddCategory";

import "./styles.css";

export function Modal({ active }) {
	const [content, setContent] = useState();

	useEffect(() => {
		setContent(<AddCategory active={active} handleContent={setContent} />);
	}, []);

	return <div className="modal-overlay">{content}</div>;
}
