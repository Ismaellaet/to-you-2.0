import axios from "axios";
import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoutes() {
	const [authorization, setAuthorization] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			axios.defaults.headers.authorization = `Bearer ${JSON.parse(
				token
			)}`;

			setAuthorization(true);
		}

		setLoading(false);
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return authorization ? <Outlet /> : <Navigate to="/" replace={true} />;
}
