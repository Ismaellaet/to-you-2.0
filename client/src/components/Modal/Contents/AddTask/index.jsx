import { useState } from "react";
import axios from "axios";
import { PaperPlaneRight, Tag, CaretLeft } from "phosphor-react";

import { AddCategory } from "../AddCategory";

import "./styles.css";

export function AddTask({ active, handleContent, category }) {
	const [taskInfos, setTaskInfos] = useState({
		title: "",
		description: "",
		category: category,
		completed: false,
		date: new Date(),
	});

	async function handleSubmit(event) {
		event.preventDefault();

		const URL = "http://localhost:5000/task/create";

		await axios.post(URL, taskInfos).then(res => res.data);

		active(false);
	}

	return (
		<form onSubmit={handleSubmit} className="modal">
			<CaretLeft
				size={24}
				color="var(--border)"
				onClick={() =>
					handleContent(
						<AddCategory
							active={active}
							handleContent={handleContent}
						/>
					)
				}
				className="close-button"
			/>

			<fieldset>
				<legend>Add Task</legend>

				<label htmlFor="title-input" className="sr-only">
					Task title
				</label>
				<input
					type="text"
					maxLength={20}
					placeholder="Title"
					id="title-input"
					onChange={e =>
						setTaskInfos({
							...taskInfos,
							title: e.target.value,
						})
					}
					required
				/>

				<label htmlFor="description-input" className="sr-only">
					Task description
				</label>
				<input
					type="text"
					placeholder="Description"
					id="description-input"
					onChange={e =>
						setTaskInfos({
							...taskInfos,
							description: e.target.value,
						})
					}
				/>

				<footer>
					<div className="category-footer">
						<Tag className="tag" size={24} />

						<div className="category">{category}</div>
					</div>
					<button className="send">
						<PaperPlaneRight size={24} color="var(--border)" />
					</button>
				</footer>
			</fieldset>
		</form>
	);
}
