import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Start } from "./pages/Start";

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}
