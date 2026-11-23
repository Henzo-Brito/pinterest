import { Link } from "react-router-dom";
import { usePostsStore } from "@/store/posts";
import { useTagsStore } from "@store/tags";

const images = import.meta.glob("/src/images/*.jpg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export default function Feed() {
	const { posts } = usePostsStore();
	const { selectedTag } = useTagsStore();

	const filtered = selectedTag === 1
		? posts
		: posts.filter((p) => p.tag_id === selectedTag);

	const columns = Array.from({ length: 6 }, (_, columnIndex) => ({
		id: `column-${columnIndex}`,
		items: filtered.filter((_, index) => index % 6 === columnIndex),
	}));

	return (
		<div className="bg-(--gray1) overflow-y-auto py-5 scrollbar-hide px-3 rounded-2xl text-(--white1) h-19/20 w-full">
			{filtered.length === 0 ? (
				<div className="flex flex-col items-center justify-center h-full gap-3 opacity-50">
					<i className="fa-regular fa-image text-6xl text-(--gray3)" />
					<p className="text-(--gray3) text-lg">Nenhum post nessa categoria ainda.</p>
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
	);
}
