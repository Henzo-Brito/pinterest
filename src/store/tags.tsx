import { create } from "zustand";
import type { Tags } from "@/types/global";

export type UseTagsStore = {
	tags: Tags;
	selectedTag: number;
	alterTags: (newTags: Tags) => void;
	selectTags: (idTag: number) => void;
};

export const useTagsStore = create<UseTagsStore>((set) => ({
	tags: {
		tags: [
			{
				id: 1,
				name: "Tudo",
			},
			{
				id: 2,
				name: "Desenho",
			},
			{
				id: 3,
				name: "Academia",
			},
			{
				id: 4,
				name: "Livro",
			},
			{
				id: 5,
				name: "Música",
			},
		],
	},

	selectedTag: 1,
	alterTags: (newTags: Tags) => set({ tags: newTags }),
	selectTags: (idTag) => set({ selectedTag: idTag }),
}));
