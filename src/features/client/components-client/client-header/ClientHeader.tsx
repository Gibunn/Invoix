import { Plus } from "lucide-react";
import { Button } from "@/common/button";
import { Input } from "@/common/Input";

export default function ClientHeader() {
	return (
		<div className="flex justify-between items-center mb-4">
			<Input
				variant="base"
				className="pl-9 w-72"
				placeholder="Cari nama atau email..."
			/>
			<Button className="text-sm flex gap-2 items-center px-4">
				<Plus size={16} /> Tambah Klien
			</Button>
		</div>
	);
}
