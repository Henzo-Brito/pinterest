import SearchBar from "./search_bar";

export default function Header() {
	return (
		<div className="flex w-full h-2/20 items-center justify-between">
			<SearchBar></SearchBar>
		</div>
	);
}
