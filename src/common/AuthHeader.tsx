interface AuthHeaderProps {
	title: string;
	subTitle: string;
}

export default function AuthHeader({ title, subTitle }: AuthHeaderProps) {
	return (
		<div className="mb-7 w-full">
			<h2 className="text-zinc-950 text-2xl font-bold mb-1">{title}</h2>
			<p className="justify-start text-gray-500 text-sm font-normal leading-5">
				{subTitle}
			</p>
		</div>
	);
}
