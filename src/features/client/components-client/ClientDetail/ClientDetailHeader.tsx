import { ChevronRight, Pen, Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/common/button";

export default function ClientDetailHeader() {
	const navigate = useNavigate();

	return (
		<div className="flex justify-between mb-4">
			<div className="flex items-center gap-1.5">
				<button
					type="button"
					onClick={() => navigate("/dashboard/client")}
					className="text-[#6B6B80] font-medium cursor-pointer"
				>
					Klien
				</button>
				<ChevronRight size={14} color="#6B6B80" />
				<p className="font-medium text-sm text-zinc-950">PT XYZ</p>
			</div>

			<div className="flex gap-2">
				<Button
					variant="base"
					className="bg-transparent gap-1.5 text-sm px-3 py-2"
				>
					<Pen size={14} />
					Edit Klien
				</Button>
				<Button
					onClick={() => navigate(`/dashboard/invoice/create`)}
					className="text-sm flex gap-2 items-center px-4"
				>
					<Plus size={16} /> Buat Invoice
				</Button>
			</div>
		</div>
	);
}
