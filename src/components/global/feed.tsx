import { useState } from "react";

type Post = {
	id: number;
	id_image: number;
};

const array: Post[] = [
	{ id: 1, id_image: 1 },
	{ id: 2, id_image: 2 },
	{ id: 3, id_image: 1 },
	{ id: 4, id_image: 1 },
	{ id: 5, id_image: 1 },
	{ id: 6, id_image: 1 },
	{ id: 7, id_image: 1 },
	{ id: 8, id_image: 1 },
	{ id: 9, id_image: 1 },
	{ id: 10, id_image: 2 },
	{ id: 11, id_image: 2 },
	{ id: 12, id_image: 2 },
	{ id: 13, id_image: 2 },
	{ id: 14, id_image: 2 },
	{ id: 15, id_image: 2 },
	{ id: 16, id_image: 2 },
	{ id: 17, id_image: 2 },
	{ id: 18, id_image: 2 },
	{ id: 19, id_image: 2 },
	{ id: 20, id_image: 2 },
	{ id: 21, id_image: 2 },
];

const images = import.meta.glob("/src/images/*.jpg", {
	eager: true,
	query: "?url",
	import: "default",
}) as Record<string, string>;

export default function Feed() {
	const columns = Array.from({ length: 6 }, (_, columnIndex) =>
		array.filter((_, index) => index % 6 === columnIndex),
	);

	return (
		<div className="bg-(--gray1) overflow-y-auto py-5 scrollbar-hide px-3 rounded-2xl text-(--white1) h-19/20 w-full">
			<div className="grid grid-cols-6 gap-x-2">
				{columns.map((column, index) => (
					<div key={index} className="flex flex-col gap-y-3">
						{column.map((post) => (
							<div
								key={post.id}
								className="rounded-xl bg-(--gray4) overflow-hidden"
							>
								<img
									src={images[`/src/images/${post.id_image}.jpg`]}
									alt={`Imagem ${post.id_image}`}
									className="block w-full h-auto"
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}