import { XSquare, Timer, Tag, PaperPlaneRight } from "phosphor-react";

import "./styles.css";

export function Modal({ active }) {
	return (
		<div className="modal-overlay">
			<form className="modal">
				<XSquare
					size={28}
					onClick={() => active(false)}
					className="cancel-button"
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
						required
					/>

					<label htmlFor="description-input" className="sr-only">
						Task description
					</label>
					<input
						type="text"
						placeholder="Description"
						id="description-input"
					/>

					<footer>
						<div>
							<Timer className="timer" size={24} />
							<Tag className="tag" size={24} />
						</div>
						<PaperPlaneRight
							className="send"
							size={24}
							color="var(--border)"
						/>
					</footer>
				</fieldset>
			</form>
		</div>
	);
}
