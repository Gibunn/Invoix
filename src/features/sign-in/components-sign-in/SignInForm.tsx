import { Link } from "react-router";
import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { InputPassword } from "@/common/InputPassword";
import { Label } from "@/common/label";

export default function SignInForm() {
	return (
		<form className="flex flex-col gap-4 w-full mb-6">
			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="Masukkan email" />
			</div>

			<div className="flex flex-col gap-1.5 w-full">
				<div className="flex justify-between">
					<Label htmlFor="password">Password</Label>
					<Link
						to="/forgot-password"
						className="text-violet-700 text-xs font-medium"
					>
						Lupa password?
					</Link>
				</div>
				<InputPassword id="password" placeholder="Masukkan password" />
			</div>

			<Button className="h-10">Masuk</Button>
		</form>
	);
}
