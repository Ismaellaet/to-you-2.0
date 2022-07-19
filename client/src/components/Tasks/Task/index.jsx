import axios from "axios";
import { format } from "date-fns";

import "./styles.css";

export function Task({ task }) {
	async function completeTask() {
		await axios
			.put("http://localhost:5000/task/update", {
				id: task.id,
				item: {
					completed: !task.completed,
				},
			})
			.then(res => res.data);
	}

	return (
		<>
			<label htmlFor={task.id} className="task">
				<div className="check-input">
					<input
						type="checkbox"
						id={task.id}
						onChange={completeTask}
						checked={task.completed ? true : false}
					/>
					<span className="checkmark"></span>
				</div>

				<div className="title-date">
					<span className="title">{task.title}</span>
					<span className="date">
						{format(new Date(task.date), "'Today at' K:mm")}
					</span>
				</div>

				<div className="category">{task.category}</div>
			</label>
		</>
	);
}
