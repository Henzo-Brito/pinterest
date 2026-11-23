import { Link } from "react-router-dom";
import { usePostsStore } from "@/store/posts";

const images = import.meta.glob("/src/images/*.jpg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export default function Saved() {
	const { posts, toggleSave } = usePostsStore();

	const saved = posts.filter((p) => p.saved);

	const columns = Array.from({ length: 6 }, (_, columnIndex) => ({
		id: `col-${columnIndex}`,
		items: saved.filter((_, index) => index % 6 === columnIndex),
	}));

	return (
		<div className="flex flex-col gap-3 h-18/20">
			<div className="flex items-center justify-between px-1 mt-1">
				<div>
					<h1 className="text-(--white1) font-bold text-2xl">Salvos</h1>
					<p className="text-(--gray3) text-sm mt-0.5">
						{saved.length} pin{saved.length !== 1 ? "s" : ""} salvos
					</p>
				</div>
				{saved.length > 0 && (
					<button
						type="button"
						onClick={() => saved.forEach((p) => toggleSave(p.id))}
						className="text-(--gray3) hover:text-(--primary1) text-sm cursor-pointer"
					>
						Limpar tudo
					</button>
				)}
			</div>

			<div className="bg-(--gray1) overflow-y-auto scrollbar-hide py-5 px-3 rounded-2xl text-(--white1) flex-1">
				{saved.length === 0 ? (
					<div className="flex flex-col items-center justify-center h-full gap-3 opacity-50">
						<i className="fa-regular fa-bookmark text-6xl text-(--gray3)" />
						<p className="text-(--gray3) text-lg">Nenhum pin salvo ainda.</p>
						<p className="text-(--gray3) text-sm">
							Acesse um post e clique em{" "}
							<i className="fa-regular fa-bookmark" /> para salvar.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-6 gap-x-2">
						{columns.map((column) => (
							<div key={column.id} className="flex flex-col gap-y-3">
								{column.items.map((post) => (
									<div key={post.id} className="group relative">
										<Link
											to={`/post/${post.id}`}
											className="block rounded-xl bg-(--gray4) overflow-hidden"
										>
											<img
												src={images[`/src/images/${post.id_image}.jpg`]}
												alt={post.title}
												className="block w-full h-auto"
											/>
											<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-xl flex flex-col justify-end p-3">
												<p className="text-(--white1) font-semibold text-sm line-clamp-2">
													{post.title}
												</p>
											</div>
										</Link>
										{/* Remove button */}
										<button
											type="button"
											title="Remover dos salvos"
											onClick={(e) => {
												e.preventDefault();
												toggleSave(post.id);
											}}
											className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg bg-black/60 hover:bg-(--primary1) cursor-pointer"
										>
											<i className="fa-solid fa-xmark text-(--white1) text-sm" />
										</button>
									</div>
								))}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
