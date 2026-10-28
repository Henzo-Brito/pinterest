export enum Pages {
	HOME = "INICIO",
	EXPLORE = "EXPLORAR",
	FOLDER = "FOLDER",
	CRIAR = "CRIAR",
}

export type Tag = {
	name: string;
	id: number;
};

export type Tags = {
	tags: Tag[];
};
