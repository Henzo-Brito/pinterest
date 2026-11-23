import { useState, useRef } from "react";
import { usePostsStore } from "@/store/posts";
import { useTagsStore } from "@store/tags";

type Props = {
	onClose: () => void;
};

export default function CreateModal({ onClose }: Props) {
	const { addPost } = usePostsStore();
	const { tags } = useTagsStore();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [tagId, setTagId] = useState(2);
	const [preview, setPreview] = useState<string | null>(null);
	const fileRef = useRef<HTMLInputElement>(null);

	function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0];
		if (!file) return;
		const url = URL.createObjectURL(file);
		setPreview(url);
	}

	function handleSubmit() {
		if (!title.trim()) return;
		addPost({
			id_image: 1,
			title: title.trim(),
			description: description.trim(),
			author: "você",
			tag_id: tagId,
		});
		onClose();
	}

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
			onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
		>
			<div className="bg-(--gray1) rounded-2xl w-full max-w-2xl mx-4 overflow-hidden flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-(--gray4)">
					<h2 className="text-(--white1) font-bold text-xl">Criar Pin</h2>
					<button
						type="button"
						onClick={onClose}
						className="p-2 rounded-xl hover:bg-(--gray4) cursor-pointer"
					>
						<i className="fa-solid fa-xmark text-(--white1) text-xl" />
					</button>
				</div>

				{/* Body */}
				<div className="flex gap-6 p-6">
					{/* Upload */}
					<button
						type="button"
						onClick={() => fileRef.current?.click()}
						className={`flex-shrink-0 w-56 h-72 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all ${
							preview ? "border-transparent p-0 overflow-hidden" : "border-(--gray4) hover:border-(--white1)"
						}`}
					>
						{preview ? (
							<img src={preview} alt="preview" className="w-full h-full object-cover" />
						) : (
							<>
								<i className="fa-regular fa-image text-4xl text-(--gray3) mb-3" />
								<p className="text-(--gray3) text-sm text-center px-4">
									Clique para selecionar uma imagem
								</p>
							</>
						)}
					</button>
					<input
						ref={fileRef}
						type="file"
						accept="image/*"
						onChange={handleFile}
						className="hidden"
					/>

					{/* Fields */}
					<div className="flex flex-col gap-4 flex-1">
						<div className="flex flex-col gap-1">
							<label className="text-(--gray3) text-xs font-medium uppercase tracking-wide">
								Título *
							</label>
							<input
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Adicione um título"
								maxLength={80}
								className="bg-(--gray4) rounded-xl px-4 py-3 text-(--white1) outline-0 placeholder:text-(--gray3) text-base"
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-(--gray3) text-xs font-medium uppercase tracking-wide">
								Descrição
							</label>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								placeholder="Fale sobre o seu pin"
								rows={4}
								maxLength={500}
								className="bg-(--gray4) rounded-xl px-4 py-3 text-(--white1) outline-0 placeholder:text-(--gray3) text-base resize-none"
							/>
						</div>

						<div className="flex flex-col gap-1">
							<label className="text-(--gray3) text-xs font-medium uppercase tracking-wide">
								Categoria
							</label>
							<div className="flex gap-2 flex-wrap">
								{tags.tags.filter((t) => t.id !== 1).map((t) => (
									<button
										key={t.id}
										type="button"
										onClick={() => setTagId(t.id)}
										className={`px-3 py-1.5 rounded-full text-sm cursor-pointer transition-all ${
											tagId === t.id
												? "bg-(--primary1) text-(--white1)"
												: "bg-(--gray4) text-(--white1) hover:-translate-y-0.5"
										}`}
									>
										{t.name}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="flex justify-end gap-3 px-6 pb-6">
					<button
						type="button"
						onClick={onClose}
						className="px-5 py-2.5 rounded-xl bg-(--gray4) text-(--white1) font-medium hover:opacity-80 cursor-pointer"
					>
						Cancelar
					</button>
					<button
						type="button"
						onClick={handleSubmit}
						disabled={!title.trim()}
						className="px-5 py-2.5 rounded-xl bg-(--primary1) text-(--white1) font-medium disabled:opacity-40 hover:opacity-90 cursor-pointer"
					>
						Publicar
					</button>
				</div>
			</div>
		</div>
	);
}
