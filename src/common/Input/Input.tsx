import type { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: "base" | "fill";
}

export function Input({
	ref,
	variant = "fill",
	disabled,
	className,
	...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }) {
	return (
		<input
			ref={ref}
			{...props}
			disabled={disabled}
			className={twMerge(
				"h-10 px-3 py-2.5 text-sm rounded-xl outline-[0.74px] outline-offset-[-0.74px] outline-zinc-950/5",
				variant === "base" && "bg-white",
				variant === "fill" && "bg-violet-100/50",
				className,
				disabled && "cursor-not-allowed",
			)}
		/>
	);
}
