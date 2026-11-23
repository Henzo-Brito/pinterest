import SearchBar from "./search_bar";
import { useLocation } from "react-router-dom";

export default function Header() {
	const location = useLocation();
	const isExplore = location.pathname === "/explore";

	// Na página de Explorar, a própria página tem sua SearchBar dedicada
	if (isExplore) return null;

	return (
		<div className="flex w-full h-2/20 items-center justify-between">
			<SearchBar />
		</div>
	);
}
