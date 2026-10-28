import Logo from "../../images/logo.png";

type Props = {
	func: () => void;
	image_str: string;
	text: string;
};

export default function BtnNav({ func, image_str, text }: Props) {
	if (image_str === "logo") {
		return (
			<button type="button" className="mb-5 cursor-pointer" onClick={func}>
				<img src={Logo} width={40} alt="Logo do Pinterest" />
			</button>
		);
	} else {
		return (
			<button type="button" className="p-2.5 rounded-xl cursor-pointer hover:bg-(--gray1)" onClick={func}>
				<i className={`${image_str} text-(--white1) text-2xl`}></i>
			</button>
		);
	}
}
