import { useParams } from "react-router-dom";

import { getPostById } from "@/store/posts";

export default function Post() {
	const { id } = useParams();

    const post = getPostById(Number(id))

	return (
		<div>
			<div className="flex bg-(--gray4) mt-3 w-4/6 h-100 rounded-2xl">
				<img
					src={`../../images/${post[0].id_image}.jpg`}
					alt=""
					className="w-1/2 bg-(--gray1) h-full"
				/>
				<div className="flex flex-col w-1/2 p-7 gap-2.5">
					<h1 className="font-bold text-3xl text-(--white1)">
						Vinland Saga Wallpaper
					</h1>
					<p className="text-justify text-xl text-(--white1)">
						Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Expedita sit ex blanditiis illum porro quis quia praesentium, labore
						dolores sapiente totam non placeat quibusdam ea consequatur
						distinctio repellat ipsam.
					</p>
				</div>
			</div>
		</div>
	);
}
