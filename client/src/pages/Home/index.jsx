import axios from "axios";
import { useState, useEffect } from "react";

export function Home() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("http://localhost:5000/home");

			setTasks(data);
		})();
	}, []);

	return (
		<>
			<ul>
				{tasks.map(task => (
					<li key={task.id}>
						{task.title}{" "}
						{task.description ? `=> ${task.description}` : ""}
					</li>
				))}
			</ul>
		</>
	);
}
