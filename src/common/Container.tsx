import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={twMerge(
				"rounded-2xl bg-white outline-[0.74px] outline-offset-[-0.74px] outline-zinc-950/5",
				className,
			)}
		>
			{children}
		</div>
	);
}
