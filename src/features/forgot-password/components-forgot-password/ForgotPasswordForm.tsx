import BackLink from "@/common/BackLink";
import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";

export default function ForgotPasswordForm() {
	return (
		<form className="flex flex-col gap-4 w-full mb-6">
			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="Masukkan email" />
			</div>

			<Button className="h-10">Kirim Link Reset</Button>
		</form>
	);
}
