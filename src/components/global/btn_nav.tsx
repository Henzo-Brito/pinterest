import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	selected: boolean;
	func: () => void;
};

export default function BtnNav({ selected, func }: Props) {
	return (
		<button type="button" className="w-full cursor-pointer" onClick={func}>
			<FontAwesomeIcon icon="check-square" />
			{selected}
		</button>
	);
}
