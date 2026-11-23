import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
	initialValue?: string;
	onSearch?: (query: string) => void;
};

export default function SearchBar({ initialValue = "", onSearch }: Props) {
	const [focused, setFocused] = useState(false);
	const [query, setQuery] = useState(initialValue);
	const navigate = useNavigate();

	function handleSearch() {
		const q = query.trim();
		if (!q) return;
		if (onSearch) {
			onSearch(q);
		} else {
			navigate(`/explore?q=${encodeURIComponent(q)}`);
		}
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") handleSearch();
	}

	return (
		<div
			className={`bg-(--gray1) p-2 pl-4 pr-3 rounded-2xl w-full h-15 flex items-center gap-2 ${
				focused ? "border border-(--white1)" : "border border-transparent"
			} hover:bg-(--gray4)`}
		>
			<i className="fa-solid fa-magnifying-glass text-(--gray3) text-lg" />
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Pesquisar"
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				className="w-full outline-0 placeholder:text-(--gray3) text-(--white1) font-medium text-xl bg-transparent"
			/>
			<button
				type="button"
				title="Busca por imagem"
				onClick={() => {}}
				className="p-2 rounded-xl hover:bg-(--gray1) cursor-pointer"
			>
				<i className="fa-regular fa-camera text-(--white1) text-xl" />
			</button>
		</div>
	);
}
