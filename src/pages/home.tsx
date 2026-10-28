import Tags from "../components/global/tags";

export default function Home() {
	return (
		<div className="flex flex-col gap-3 h-18/20">
			<Tags
				func={() => {}}
				tags={[
					{
						id: "123456",
						name: "Name",
					},
					{
						id: "123456",
						name: "Name",
					},
					{
						id: "123456",
						name: "Name",
					},
					{
						id: "123456",
						name: "Name",
					},
					{
						id: "123456",
						name: "Name",
					},
				]}
			></Tags>
			<div className="bg-(--gray1) rounded-2xl text-(--white1) h-19/20 w-full flex-1"></div>
		</div>
	);
}
