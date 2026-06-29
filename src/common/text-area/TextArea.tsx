import type { TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	variant?: "base" | "fill";
}

export function TextArea({
	ref,
	disabled,
	className,
	variant = "fill",
	...props
}: TextArea & { ref?: React.Ref<HTMLTextAreaElement> }) {
	return (
		<textarea
			ref={ref}
			{...props}
			disabled={disabled}
			className={twMerge(
				"px-3 py-2.5 text-sm rounded-xl outline-[0.74px] outline-offset-[-0.74px] outline-zinc-950/5",
				variant === "base" && "bg-white",
				variant === "fill" && "bg-violet-100/50",
				className,
				disabled && "cursor-not-allowed",
			)}
		/>
	);
}
