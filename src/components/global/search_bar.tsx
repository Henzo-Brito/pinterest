import { useState } from "react";
import BtnNav from "./btn_nav";

export default function SearchBar() {
	const [click, setClick] = useState<boolean>(false);

	return (
		<div
			className={`bg-(--gray1) p-2 pl-4 pr-3 rounded-2xl w-full h-15 hover:bg-(--gray4) flex ${
				click ? "border border-(--white1)" : "border-none"
			}`}
		>
			<input
				placeholder="Pesquisar"
				onFocus={() => {
					setClick(true);
				}}
				onBlur={() => {
					setClick(false);
				}}
				className="w-full outline-0 placeholder:text-(--gray3) text-(--white1) font-medium text-xl"
			/>
			<BtnNav func={() => {}} text="" image_str="fa-regular fa-camera"></BtnNav>
		</div>
	);
}
