import BtnNav from "./btn_nav";
export default function SearchBar() {
	return (
		<div className="bg-(--gray1) p-2 pl-4 pr-3 rounded-2xl w-full h-15 flex ">
			<input
				placeholder="Pesquisar"
				className="w-full  placeholder:text-(--gray3) text-(--white1) font-medium text-xl"
			/>
            <BtnNav func={()=>{}} text="" image_str="fa-regular fa-camera"></BtnNav>
		</div>
	);
}
