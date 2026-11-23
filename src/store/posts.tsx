import { create } from "zustand";

export type Post = {
	id: number;
	id_image: number;
	title: string;
	description: string;
	author: string;
	tag_id: number;
	saved: boolean;
	likes: number;
};

export type UsePostsStore = {
	posts: Post[];
	toggleSave: (id: number) => void;
	toggleLike: (id: number) => void;
	addPost: (post: Omit<Post, "id" | "saved" | "likes">) => void;
};

const initialPosts: Post[] = [
	{ id: 1,  id_image: 1,  title: "Vinland Saga", description: "Arte incrível do anime Vinland Saga, mostrando Thorfinn em um momento épico de batalha.", author: "henzo", tag_id: 1, saved: false, likes: 142 },
	{ id: 2,  id_image: 2,  title: "Personagem Dark", description: "Concept art sombrio com iluminação dramática e paleta fria. Inspiração para projetos de ficção.", author: "arte.visual", tag_id: 2, saved: false, likes: 89 },
	{ id: 3,  id_image: 1,  title: "Sketch de Guerreiro", description: "Esboço a lápis de um guerreiro viking com traços expressivos e dinâmicos.", author: "sketchbook.daily", tag_id: 2, saved: false, likes: 56 },
	{ id: 4,  id_image: 2,  title: "Treino do Dia", description: "Rotina de treino completa para ganho de massa. Foco em compostos e progressão de carga.", author: "fit.life", tag_id: 3, saved: false, likes: 210 },
	{ id: 5,  id_image: 1,  title: "Minha Estante", description: "Seleção de livros favoritos do ano. Destaque para ficção científica e fantasia épica.", author: "leitor.compulsivo", tag_id: 4, saved: false, likes: 77 },
	{ id: 6,  id_image: 2,  title: "Playlist Lofi", description: "A melhor playlist para focar nos estudos ou relaxar no fim do dia com beats tranquilos.", author: "lofi.beats", tag_id: 5, saved: false, likes: 303 },
	{ id: 7,  id_image: 1,  title: "Arte Digital", description: "Pintura digital com técnica de painting, misturando realismo e fantasia em cenário épico.", author: "digital.art", tag_id: 2, saved: false, likes: 198 },
	{ id: 8,  id_image: 2,  title: "Cardio Intenso", description: "Protocolo HIIT de 20 minutos que substitui 1 hora de esteira. Eficiência máxima.", author: "fit.life", tag_id: 3, saved: false, likes: 94 },
	{ id: 9,  id_image: 1,  title: "Vinland Saga Vol. 2", description: "O segundo arco da saga com Askeladd é considerado um dos melhores da história do mangá.", author: "henzo", tag_id: 4, saved: false, likes: 441 },
	{ id: 10, id_image: 2,  title: "Guitarra Clássica", description: "Tablatura e teoria musical para iniciantes na guitarra clássica. Do zero ao primeiro acorde.", author: "musica.vibe", tag_id: 5, saved: false, likes: 67 },
	{ id: 11, id_image: 1,  title: "Character Design", description: "Processo completo de criação de personagem: silhueta, paleta de cores e expressões.", author: "sketchbook.daily", tag_id: 2, saved: false, likes: 155 },
	{ id: 12, id_image: 2,  title: "Nutrição Esportiva", description: "O que comer antes e depois do treino para maximizar resultados e recuperação muscular.", author: "fit.life", tag_id: 3, saved: false, likes: 128 },
	{ id: 13, id_image: 1,  title: "Duna", description: "Frank Herbert criou um universo político e filosófico que influencia a ficção científica até hoje.", author: "leitor.compulsivo", tag_id: 4, saved: false, likes: 312 },
	{ id: 14, id_image: 2,  title: "Jazz Moderno", description: "A evolução do jazz: de Miles Davis ao jazz fusion contemporâneo. Uma viagem sonora.", author: "musica.vibe", tag_id: 5, saved: false, likes: 88 },
	{ id: 15, id_image: 1,  title: "Paisagem Noturna", description: "Pintura de paisagem noturna com cidade iluminada e céu estrelado ao fundo.", author: "arte.visual", tag_id: 2, saved: false, likes: 220 },
	{ id: 16, id_image: 2,  title: "Mobilidade", description: "Rotina de 15 minutos de mobilidade articular para praticar todas as manhãs.", author: "fit.life", tag_id: 3, saved: false, likes: 174 },
	{ id: 17, id_image: 1,  title: "O Nome do Vento", description: "Patrick Rothfuss e a história de Kvothe: fantasia épica com escrita literária impecável.", author: "leitor.compulsivo", tag_id: 4, saved: false, likes: 263 },
	{ id: 18, id_image: 2,  title: "Produção Musical", description: "Como criar beats do zero no FL Studio: mixagem, equalização e síntese básica.", author: "musica.vibe", tag_id: 5, saved: false, likes: 191 },
	{ id: 19, id_image: 1,  title: "Estilo Manga", description: "Técnicas de sombreado no estilo mangá japonês com tinta nanquim e screentone.", author: "sketchbook.daily", tag_id: 2, saved: false, likes: 147 },
	{ id: 20, id_image: 2,  title: "Treino em Casa", description: "Treino full body sem equipamento. Apenas peso corporal com progressão eficiente.", author: "fit.life", tag_id: 3, saved: false, likes: 85 },
	{ id: 21, id_image: 1,  title: "Fundação", description: "Isaac Asimov e o ciclo Fundação: política galáctica e o colapso civilizacional como ciência.", author: "leitor.compulsivo", tag_id: 4, saved: false, likes: 377 },
];

export const usePostsStore = create<UsePostsStore>((set) => ({
	posts: initialPosts,
	toggleSave: (id) =>
		set((state) => ({
			posts: state.posts.map((p) =>
				p.id === id ? { ...p, saved: !p.saved } : p
			),
		})),
	toggleLike: (id) =>
		set((state) => ({
			posts: state.posts.map((p) =>
				p.id === id ? { ...p, likes: p.likes + (p.saved ? -1 : 1) } : p
			),
		})),
	addPost: (newPost) =>
		set((state) => ({
			posts: [
				{
					...newPost,
					id: state.posts.length + 1,
					saved: false,
					likes: 0,
				},
				...state.posts,
			],
		})),
}));

// Compatibilidade com código legado
export const posts = initialPosts;
export function getPostById(id: number) {
	return initialPosts.filter((p) => p.id === id);
}
