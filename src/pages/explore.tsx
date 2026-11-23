import { useSearchParams } from "react-router-dom";
import { usePostsStore } from "@/store/posts";
import SearchBar from "@comp/global/search_bar";
import { Link } from "react-router-dom";
import { useState } from "react";

const images = import.meta.glob("/src/images/*.jpg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export default function Explore() {
	const { posts } = usePostsStore();
	const [searchParams, setSearchParams] = useSearchParams();
	const [query, setQuery] = useState(searchParams.get("q") ?? "");

	const q = searchParams.get("q") ?? "";

	const filtered = q
		? posts.filter(
				(p) =>
					p.title.toLowerCase().includes(q.toLowerCase()) ||
					p.description.toLowerCase().includes(q.toLowerCase()) ||
					p.author.toLowerCase().includes(q.toLowerCase())
		  )
		: posts;

	function handleSearch(newQuery: string) {
		setQuery(newQuery);
		setSearchParams(newQuery ? { q: newQuery } : {});
	}

	const columns = Array.from({ length: 6 }, (_, columnIndex) => ({
		id: `col-${columnIndex}`,
		items: filtered.filter((_, index) => index % 6 === columnIndex),
	}));

	return (
		<div className="flex flex-col gap-3 h-18/20">
			{/* Search bar dedicada */}
			<div className="flex items-center gap-3">
				<div className="flex-1">
					<SearchBar initialValue={query} onSearch={handleSearch} />
				</div>
				{q && (
					<button
						type="button"
						onClick={() => { setQuery(""); setSearchParams({}); }}
						className="text-(--gray3) hover:text-(--white1) text-sm font-medium whitespace-nowrap cursor-pointer"
					>
						Limpar
					</button>
				)}
			</div>

			{/* Title */}
			<div className="px-1">
				{q ? (
					<p className="text-(--gray3) text-sm">
						<span className="text-(--white1) font-semibold">{filtered.length}</span> resultado{filtered.length !== 1 ? "s" : ""} para "<span className="text-(--white1)">{q}</span>"
					</p>
				) : (
					<p className="text-(--white1) font-bold text-xl">Explorar tudo</p>
				)}
			</div>

			{/* Feed */}
			<div className="bg-(--gray1) overflow-y-auto scrollbar-hide py-5 px-3 rounded-2xl text-(--white1) flex-1">
				{filtered.length === 0 ? (
					<div className="flex flex-col items-center justify-center h-full gap-3 opacity-50">
						<i className="fa-regular fa-face-sad-tear text-6xl text-(--gray3)" />
						<p className="text-(--gray3) text-lg">Nenhum resultado encontrado.</p>
					</div>
				) : (
					<div className="grid grid-cols-6 gap-x-2">
						{columns.map((column) => (
							<div key={column.id} className="flex flex-col gap-y-3">
								{column.items.map((post) => (
									<Link
										key={post.id}
										to={`/post/${post.id}`}
										className="group block rounded-xl bg-(--gray4) overflow-hidden relative"
									>
										<img
											src={images[`/src/images/${post.id_image}.jpg`]}
											alt={post.title}
											className="block w-full h-auto"
										/>
										<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-xl flex flex-col justify-end p-3 gap-1">
											<p className="text-(--white1) font-semibold text-sm leading-tight line-clamp-2">{post.title}</p>
											<div className="flex items-center gap-1 text-(--gray3) text-xs">
												<i className="fa-regular fa-heart" />
												<span>{post.likes}</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
