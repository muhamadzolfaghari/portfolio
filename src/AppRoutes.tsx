import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";

function AppRoutes() {
	return <Routes>
		<Route path={"/"} element={<Home />} />
	</Routes>

}

export default AppRoutes;