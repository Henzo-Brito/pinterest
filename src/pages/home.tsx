import Feed from "@comp/global/feed";
import Tags from "@comp/home/tags";

export default function Home() {
	return (
		<div className="flex flex-col gap-3 h-18/20">
			<Tags></Tags>
			<Feed></Feed>
		</div>
	);
}
