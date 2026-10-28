import BtnNav from "./btn_nav";

export default function NavBar() {
	return (
		<div className="flex flex-col w-20 h-full items-center pb-10">
			<div className="flex flex-col w-full h-full items-center gap-6 justify-top pt-10">
				<BtnNav image_str="logo" text="Home" func={() => {}} />
				<BtnNav image_str="fa-solid fa-house" text="Home" func={() => {}} />
				<BtnNav image_str="fa-regular fa-bell" text="Home" func={() => {}} />
				<BtnNav image_str="fa-regular fa-compass" text="Home" func={() => {}} />
				<BtnNav image_str="fa-regular fa-folder" text="Home" func={() => {}} />
			</div>

			<BtnNav image_str="fa-solid fa-sun" text="Home" func={() => {}} />
		</div>
	);
}
