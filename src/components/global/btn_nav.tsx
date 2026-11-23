import Logo from "@img/logo.png";

type Props = {
	func: () => void;
	image_str: string;
	text: string;
	active?: boolean;
};

export default function BtnNav({ func, image_str, text, active = false }: Props) {
	if (image_str === "logo") {
		return (
			<button
				type="button"
				title={text}
				className="mb-5 cursor-pointer hover:-translate-y-1/6"
				onClick={func}
			>
				<img src={Logo} width={40} alt="Logo do Pinterest" />
			</button>
		);
	}

	return (
		<div className="relative group flex items-center">
			<button
				type="button"
				title={text}
				className={`p-2.5 rounded-xl cursor-pointer transition-all ${
					active
						? "bg-(--primary1) hover:bg-(--primary1)"
						: "hover:bg-(--gray4)"
				}`}
				onClick={func}
			>
				<i
					className={`${image_str} text-2xl ${
						active ? "text-(--white1)" : "text-(--white1)"
					}`}
				/>
			</button>
			<span className="absolute left-14 bg-(--gray4) text-(--white1) text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none z-50">
				{text}
			</span>
		</div>
	);
}
