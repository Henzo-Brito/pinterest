import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/global/Header";
import NavBar from "./components/global/nav_bar";
import Home from "./pages/home";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<NavBar />

				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
