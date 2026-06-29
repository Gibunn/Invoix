import {
	DialogBackdrop,
	Dialog as DialogHeadlessUI,
	DialogPanel,
} from "@headlessui/react";
import type { ReactNode } from "react";

interface DialogProps {
	open: boolean;
	className?: string;
	children?: ReactNode;
	onOpen: (o: boolean) => void;
}

export function Dialog({ open, onOpen, children, className }: DialogProps) {
	return (
		<DialogHeadlessUI open={open} onClose={onOpen} className="relative z-50">
			<DialogBackdrop className="bg-black/30 inset fixed" />
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<DialogPanel className={className}>{children}</DialogPanel>
			</div>
		</DialogHeadlessUI>
	);
}
