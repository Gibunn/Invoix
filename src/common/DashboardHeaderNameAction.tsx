import { ChevronDown } from "lucide-react";

export default function DashboardHeaderNameAction({ name }: { name: string }) {
	return (
		<div className="flex cursor-pointer gap-2 text-sm font-medium items-center">
			{name}
			<ChevronDown size={14} color="#6B6B80" />
		</div>
	);
}
