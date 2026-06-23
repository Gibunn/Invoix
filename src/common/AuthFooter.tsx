import { Link } from "react-router";

interface AuthFooterProps {
	to: string;
	footerTitle: string;
	linkTitle: string;
}

export default function AuthFooter({
	to,
	footerTitle,
	linkTitle,
}: AuthFooterProps) {
	return (
		<p className="text-gray-500 text-sm font-normal flex gap-1 items-center">
			{footerTitle}
			<Link to={to} className="text-violet-700 text-base font-semibold">
				{linkTitle}
			</Link>
		</p>
	);
}
