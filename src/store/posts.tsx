export type Post = {
	id: number;
	id_image: number;
};

export const posts: Post[] = [
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

export function getPostById(id: Number){
    const post = posts.filter((p)=> p.id === id)
    return post
}