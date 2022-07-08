import {
	Briefcase,
	GraduationCap,
	HouseLine,
	List,
	Plus,
} from "phosphor-react";

import { NavBar } from "../../components/NavBar";
import { Tasks } from "../../components/Tasks";

import "./styles.css";

export function Home() {
	return (
		<div className="container-home">
			<header>
				<List size={32} color="var(--border)" className="menu" />

				<div className="categories-bar">
					<ul className="categories">
						<li className="category">
							<Briefcase size={24} />
							Work
						</li>
						<li className="category">
							<HouseLine size={24} />
							Home
						</li>
						<li className="category">
							<GraduationCap size={24} />
							University
						</li>
						<li className="category">
							<Plus size={24} />
							New
						</li>
					</ul>
				</div>
			</header>

			<main>
				<Tasks />
			</main>

			<footer>
				<NavBar />
			</footer>
		</div>
	);
}
