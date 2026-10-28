import { useTagsStore } from "@store/tags";

export default function BtnNav() {
	const { tags, selectedTag, selectTags } = useTagsStore();

	return (
		<div className="flex h-1/20 gap-2 items-center">
			{tags.tags.map((e) => (
				<button
					key={e.id}
					type="button"
					className={
						`p-1.5 px-3 rounded-full text cursor-pointer  ` +
						(e.id === selectedTag
							? "bg-(--primary1) text-(--gray2)"
							: "text-(--white1) hover:-translate-y-1/10")
					}
					onClick={() => {
						selectTags(e.id);
					}}
				>
					{e.name}
				</button>
			))}
		</div>
	);
}
