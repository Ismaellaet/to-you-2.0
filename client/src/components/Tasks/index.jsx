import { useState, useEffect } from "react";
import axios from "axios";

import { DropdownButton } from "../DropdownButton";
import { Task } from "../Task";

import "./styles.css";

export function Tasks() {
	const [tasks, setTasks] = useState([]);
	const tasksToDo = [];
	const tasksCompleted = [];

	useEffect(() => {
		const tasksList = async () => {
			const { data } = await axios.get("http://localhost:5000/task/list");

			setTasks(data);
		};

		tasksList();
	}, []);

	function separateTasks() {
		return tasks.map(task => {
			task.completed ? tasksCompleted.push(task) : tasksToDo.push(task);
		});
	}

	separateTasks();

	return (
		<>
			<DropdownButton name="today">
				{tasksToDo ? (
					<ul className="tasks-wrapper">
						{tasksToDo.map(task => (
							<li key={task.id} className="task-container">
								<Task task={task} />
							</li>
						))}
					</ul>
				) : (
					""
				)}
			</DropdownButton>

			<DropdownButton name="completed">
				{tasksToDo ? (
					<ul className="tasks-wrapper">
						{tasksCompleted.map(task => (
							<li key={task.id} className="task-container">
								<Task task={task} />
							</li>
						))}
					</ul>
				) : (
					""
				)}
			</DropdownButton>
		</>
	);
}
