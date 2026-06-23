import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { InputPassword } from "@/common/InputPassword";
import { Label } from "@/common/label";

export default function RegisterForm() {
	return (
		<form className="flex flex-col gap-4 w-full mb-6">
			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="Masukkan email" />
			</div>

			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="fullname">Nama Lengkap</Label>
				<Input id="fullname" placeholder="Masukkan fullname" />
			</div>

			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="password">Password</Label>
				<InputPassword
					id="password"
					placeholder="Min. 8 karakter, ada huruf besar & angka"
				/>
			</div>

			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="password">Konfirmasi Password</Label>
				<InputPassword id="password" placeholder="Ulangi password" />
			</div>

			<Button className="h-10">Daftar Sekarang</Button>
		</form>
	);
}
