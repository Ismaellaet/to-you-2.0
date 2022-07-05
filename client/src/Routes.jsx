import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Start } from "./pages/Start";
import { PrivateRoutes } from "./utils/PrivateRoutes";

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route element={<PrivateRoutes />}>
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</Router>
	);
}
