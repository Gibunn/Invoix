import { X } from "lucide-react";
import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";
import { TextArea } from "@/common/text-area";
import { useClientDialogStore } from "../../store-client/useClientDialogStore";

export default function ClientCreateForm() {
	const setOpenCreate = useClientDialogStore((s) => s.setOpenCreate);

	return (
		<form>
			<div className="flex justify-between mb-6.25">
				<h2 className="font-semibold">Tambah Klien Baru</h2>
				<button
					type="button"
					onClick={() => setOpenCreate(false)}
					className="cursor-pointer"
				>
					<X size={20} color="#6B6B80" />
				</button>
			</div>

			<div className="space-y-3 mb-7.5">
				<div className="flex flex-col gap-1.5 w-115">
					<Label required={true}>Nama Klien / Perusahaan</Label>
					<Input placeholder="Masukkan nama klien / perusaahan" />
				</div>

				<div className="flex items-center gap-3 w-115">
					<div className="flex flex-col gap-1.5 w-full">
						<Label required={true}>Email</Label>
						<Input placeholder="Masukkan email" />
					</div>

					<div className="flex flex-col gap-1.5 w-full">
						<Label>No. Telepon</Label>
						<Input placeholder="Masukkan No. Telepon" />
					</div>
				</div>

				<div className="flex flex-col gap-1.5 w-115">
					<Label>Alamat</Label>
					<Input placeholder="Masukkan alamat" />
				</div>

				<div className="flex flex-col gap-1.5 w-115 pt-1.5">
					<Label>
						Catatan Internal{" "}
						<span className="text-[#6B6B80] font-normal">
							{"(tidak muncul di inovice)"}
						</span>
					</Label>
					<TextArea rows={2} placeholder="Catatan pribadi tentang klien" />
				</div>
			</div>

			<div className="w-full flex gap-2.5">
				<Button
					variant="base"
					onClick={() => setOpenCreate(false)}
					className="font-sm w-full px-4 font-medium"
				>
					Batal
				</Button>
				<Button type="submit" className="font-sm w-full px-4 font-medium">
					Simpan Klien
				</Button>
			</div>
		</form>
	);
}
