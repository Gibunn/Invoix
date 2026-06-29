import type { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	required?: boolean;
}

export function Label({
	className,
	htmlFor,
	children,
	required,
	...props
}: LabelProps) {
	return (
		<label
			{...props}
			htmlFor={htmlFor}
			className={twMerge("text-zinc-950 text-sm font-medium", className)}
		>
			{children}
			{required && <span className="text-[#FB2C36]">*</span>}
		</label>
	);
}
