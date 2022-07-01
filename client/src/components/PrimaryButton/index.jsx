import React from "react";
import "./styles.css";

export function PrimaryButton(props) {
	return <button className="primary-button">{props.text}</button>;
}
