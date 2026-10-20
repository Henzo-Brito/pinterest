import { useState } from "react";
import type { Pages } from "../../types/pages";
import BtnNav from "./btn_nav";

export default function NavBar() {
	const [page, setPage] = useState<Pages>();

	return (
		<div className="flex-col w-18 h-screen bg-(--gray2) rounded-tr-2 items-center justify-between">
			<BtnNav selected={true} func={() => {}} />
		</div>
	);
}
