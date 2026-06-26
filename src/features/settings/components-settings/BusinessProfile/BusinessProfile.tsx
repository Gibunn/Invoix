import { Button } from "@/common/button";
import Container from "@/common/Container";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";
import ProfileImage from "@/common/ProfileImage";

export default function BusinessProfile() {
	return (
		<Container className="p-6 w-fit">
			<h2 className="text-zinc-950 text-sm font-semibold mb-5">
				Profil Bisnis
			</h2>

			<div className="flex gap-4 items-center mb-5">
				<ProfileImage
					name="M Gibran"
					className="rounded-2xl size-16 bg-violet-100 text-xl text-violet-700"
				/>
				<div className="flex flex-col gap-1">
					<Button variant="base" className="text-sm px-3 py-1.75">
						Upload Logo
					</Button>
					<p className="text-gray-500 text-xs">JPG/PNG, maks 2MB</p>
				</div>
			</div>

			<div>
				<div className="flex gap-4">
					<div className="flex flex-col gap-1.5">
						<Label>Nama Usaha</Label>
						<Input className="w-64" placeholder="Masukkan nama usaha" />
					</div>

					<div className="flex flex-col gap-1.5">
						<Label>Bidang</Label>
						<Input className="w-64" placeholder="Masukkan bidang" />
					</div>
				</div>

				<Button className="px-4 mt-5 text-sm">Simpan Perubahan</Button>
			</div>
		</Container>
	);
}
