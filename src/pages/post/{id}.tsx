import { useParams, useNavigate, Link } from "react-router-dom";
import { usePostsStore } from "@/store/posts";

const images = import.meta.glob("/src/images/*.jpg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export default function Post() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { posts, toggleSave } = usePostsStore();

	const post = posts.find((p) => p.id === Number(id));

	if (!post) {
		return (
			<div className="flex flex-col items-center justify-center h-full gap-4 text-(--white1)">
				<i className="fa-regular fa-image text-6xl text-(--gray3)" />
				<p className="text-(--gray3) text-xl">Post não encontrado.</p>
				<button
					type="button"
					onClick={() => navigate("/")}
					className="px-5 py-2.5 rounded-xl bg-(--primary1) text-(--white1) font-medium cursor-pointer hover:opacity-90"
				>
					Voltar ao início
				</button>
			</div>
		);
	}

	const related = posts
		.filter((p) => p.id !== post.id && p.tag_id === post.tag_id)
		.slice(0, 6);

	return (
		<div className="overflow-y-auto scrollbar-hide h-full pr-1">
			{/* Back */}
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="flex items-center gap-2 text-(--gray3) hover:text-(--white1) mb-4 cursor-pointer"
			>
				<i className="fa-solid fa-arrow-left" />
				<span className="text-sm font-medium">Voltar</span>
			</button>

			{/* Main card */}
			<div className="flex bg-(--gray1) rounded-2xl overflow-hidden">
				{/* Image */}
				<div className="w-1/2 bg-(--gray4) flex-shrink-0">
					<img
						src={images[`/src/images/${post.id_image}.jpg`]}
						alt={post.title}
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Info */}
				<div className="flex flex-col w-1/2 p-7 gap-4">
					{/* Actions */}
					<div className="flex gap-2 justify-end">
						<button
							type="button"
							onClick={() => toggleSave(post.id)}
							title={post.saved ? "Remover dos salvos" : "Salvar"}
							className={`p-2.5 rounded-xl cursor-pointer transition-all ${
								post.saved
									? "bg-(--primary1) hover:bg-(--primary1)"
									: "bg-(--gray4) hover:bg-(--gray1)"
							}`}
						>
							<i
								className={`text-xl text-(--white1) ${
									post.saved ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
								}`}
							/>
						</button>
						<button
							type="button"
							title="Compartilhar"
							className="p-2.5 rounded-xl bg-(--gray4) hover:bg-(--gray1) cursor-pointer"
						>
							<i className="fa-solid fa-share-nodes text-(--white1) text-xl" />
						</button>
						<button
							type="button"
							title="Mais opções"
							className="p-2.5 rounded-xl bg-(--gray4) hover:bg-(--gray1) cursor-pointer"
						>
							<i className="fa-solid fa-ellipsis text-(--white1) text-xl" />
						</button>
					</div>

					{/* Title & desc */}
					<div className="flex flex-col gap-2">
						<h1 className="font-bold text-3xl text-(--white1) leading-tight">{post.title}</h1>
						<p className="text-justify text-base text-(--white1) opacity-80 leading-relaxed">
							{post.description}
						</p>
					</div>

					{/* Author */}
					<div className="flex items-center gap-3 mt-auto pt-4 border-t border-(--gray4)">
						<div className="w-10 h-10 rounded-full bg-(--gray4) flex items-center justify-center">
							<i className="fa-regular fa-user text-(--white1)" />
						</div>
						<div>
							<p className="text-(--white1) font-semibold text-sm">@{post.author}</p>
							<p className="text-(--gray3) text-xs">Criador</p>
						</div>

						<div className="ml-auto flex items-center gap-2 text-(--gray3) text-sm">
							<i className="fa-regular fa-heart" />
							<span>{post.likes}</span>
						</div>
					</div>
				</div>
			</div>

			{/* Related */}
			{related.length > 0 && (
				<div className="mt-8">
					<h2 className="text-(--white1) font-bold text-xl mb-4">Mais como este</h2>
					<div className="grid grid-cols-6 gap-3">
						{related.map((p) => (
							<Link
								key={p.id}
								to={`/post/${p.id}`}
								className="group block rounded-xl bg-(--gray1) overflow-hidden relative"
							>
								<img
									src={images[`/src/images/${p.id_image}.jpg`]}
									alt={p.title}
									className="w-full h-auto block"
								/>
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-xl flex flex-col justify-end p-2">
									<p className="text-(--white1) font-semibold text-xs line-clamp-2">{p.title}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
