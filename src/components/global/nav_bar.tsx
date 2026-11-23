import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import BtnNav from "./btn_nav";
import CreateModal from "@comp/global/create_modal";

export default function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [showCreate, setShowCreate] = useState(false);

	const isActive = (path: string) => location.pathname === path;

	return (
		<>
			<div className="flex flex-col w-20 h-full items-center pb-10">
				<div className="flex flex-col w-full h-full items-center gap-6 justify-top pt-10">
					<BtnNav
						image_str="logo"
						text="Início"
						func={() => navigate("/")}
					/>
					<BtnNav
						image_str="fa-solid fa-house"
						text="Início"
						active={isActive("/")}
						func={() => navigate("/")}
					/>
					<BtnNav
						image_str="fa-regular fa-compass"
						text="Explorar"
						active={isActive("/explore")}
						func={() => navigate("/explore")}
					/>
					<BtnNav
						image_str="fa-regular fa-folder"
						text="Salvos"
						active={isActive("/saved")}
						func={() => navigate("/saved")}
					/>
					<BtnNav
						image_str="fa-solid fa-plus"
						text="Criar"
						func={() => setShowCreate(true)}
					/>
					<BtnNav
						image_str="fa-regular fa-bell"
						text="Notificações"
						func={() => {}}
					/>
				</div>

				<BtnNav image_str="fa-solid fa-sun" text="Tema" func={() => {}} />
			</div>

			{showCreate && <CreateModal onClose={() => setShowCreate(false)} />}
		</>
	);
}
