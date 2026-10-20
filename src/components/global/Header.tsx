import BtnNav from "./btn_nav";

export default function Header() {
	return (
		<div className="flex w-(100%)  h-20 bg-(--white1) items-center justify-between">
			<BtnNav selected={true} func={() => {}} />
		</div>
	);
}
