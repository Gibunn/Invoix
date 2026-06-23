import type React from "react";

interface AuthFormLayoutProps {
	children?: React.ReactNode;
}

export default function AuthFormLayout({ children }: AuthFormLayoutProps) {
	return (
		<div className="w-[36%] p-12 bg-white flex flex-col items-center justify-center h-screen font-['Plus_Jakarta_Sans']">
			{children}
		</div>
	);
}
