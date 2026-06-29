import { Plus } from "lucide-react";
import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { useClientDialogStore } from "../../store-client/useClientDialogStore";

export default function ClientHeader() {
	const setOpenCreate = useClientDialogStore((s) => s.setOpenCreate);

	return (
		<div className="flex justify-between items-center mb-4">
			<Input
				variant="base"
				className="pl-9 w-72"
				placeholder="Cari nama atau email..."
			/>
			<Button
				onClick={() => setOpenCreate(true)}
				className="text-sm flex gap-2 items-center px-4"
			>
				<Plus size={16} /> Tambah Klien
			</Button>
		</div>
	);
}
