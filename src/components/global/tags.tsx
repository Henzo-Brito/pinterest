type Tag = {
	name: string;
	id: string;
};

type Props = {
	tags: Tag[];
	func: (id: string) => void;
};

export default function BtnNav({ tags, func }: Props) {
	return (
		<div className="flex h-1/20 gap-2  items-center">
			{tags.map((e) => (
				<button
					key={e.id}
					type="button"
					className="p-2.5 rounded-xl text-(--white1) text cursor-pointer hover:bg-(--gray1)"
					onClick={() => func(e.id)}
				>
					{e.name}
				</button>
			))}
		</div>
	);
}