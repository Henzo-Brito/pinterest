import { Link } from "react-router-dom";
import { posts } from "@/store/posts";

const images = import.meta.glob("/src/images/*.jpg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export default function Feed() {
	const columns = Array.from({ length: 6 }, (_, columnIndex) => ({
		id: `column-${columnIndex}`,
		items: posts.filter((_, index) => index % 6 === columnIndex),
	}));

	return (
		<div className="bg-(--gray1) overflow-y-auto py-5 scrollbar-hide px-3 rounded-2xl text-(--white1) h-19/20 w-full">
			<div className="grid grid-cols-6 gap-x-2">
				{columns.map((column) => (
					<div key={column.id} className="flex flex-col gap-y-3">
						{column.items.map((post) => (
							<Link
								key={post.id}
								to={`/post/${post.id}`}
								className="block rounded-xl bg-(--gray4) overflow-hidden"
							>
								<img
									src={images[`/src/images/${post.id_image}.jpg`]}
									alt={`Imagem ${post.id_image}`}
									className="block w-full h-auto"
								/>
							</Link>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
