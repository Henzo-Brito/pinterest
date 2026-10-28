import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/global/header";
import NavBar from "./components/global/nav_bar";
import Home from "./pages/home";

function App() {
	return (
		<BrowserRouter>
			<div className="flex w-screen h-screen ">
				<NavBar></NavBar>
				<div className="flex flex-col gap-1 w-full pb-3 pr-3 pt-3">
					<Header />
					<Routes>
						<Route path="/"  element={<Home />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
