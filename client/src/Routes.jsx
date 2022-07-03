import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Start } from "./pages/Start";

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}
