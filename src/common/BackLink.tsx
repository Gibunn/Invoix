import { ArrowLeft } from "lucide-react";
import type React from "react";
import { Link } from "react-router";

interface BackLinkProps {
	to: string;
	children?: React.ReactNode;
}

export default function BackLink({ to, children }: BackLinkProps) {
	return (
		<Link
			to={to}
			className="text-violet-700 text-base font-medium font-['Plus_Jakarta_Sans'] flex gap-1 items-center"
		>
			<ArrowLeft color="#7008E7" size={14} />
			{children}
		</Link>
	);
}
