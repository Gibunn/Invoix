import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: string;
}

export function Button({
	children,
	disabled,
	className,
	type = "button",
	variant = "fill",
	...props
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			type={type}
			className={twMerge(
				"flex justify-center items-center rounded-xl font-semibold py-2.5",
				disabled ? "cursor-not-allowed" : "cursor-pointer",
				variant === "base" && "outline-zinc-950/5 outline text-zinc-950",
				variant === "fill" && "bg-violet-700 text-white",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
