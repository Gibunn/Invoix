import { twMerge } from "tailwind-merge";

export default function ProfileImage({
	name,
	className,
}: {
	name: string;
	className?: string;
}) {
	const nameParts = name.split(" ");
	const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
	const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

	return (
		<span
			className={twMerge(
				"size-8 cursor-pointer bg-violet-500 rounded-full flex justify-center items-center text-white text-xs font-semibold",
				className,
			)}
		>
			{firstNameInitial}
			{lastNameInitial}
		</span>
	);
}
