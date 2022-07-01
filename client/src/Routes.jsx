import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start";

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
			</Routes>
		</Router>
	);
}
