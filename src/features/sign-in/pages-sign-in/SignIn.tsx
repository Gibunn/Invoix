import { Link } from "react-router";
import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { InputPassword } from "@/common/InputPassword";
import { Label } from "@/common/label/Label";

export default function SignIn() {
	return (
		<div className="w-[36%] p-12 bg-white flex flex-col items-center justify-center h-screen font-['Plus_Jakarta_Sans']">
			<div className="mb-7 w-full">
				<h2 className="text-zinc-950 text-2xl font-bold mb-1">
					Selamat datang kembali
				</h2>
				<p className="justify-start text-gray-500 text-sm font-normal leading-5">
					Masuk ke akun Invoix kamu
				</p>
			</div>

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

			<div className="flex justify-start w-full items-center gap-3 mb-6">
				<div className="w-full h-px relative bg-zinc-950/8"></div>

				<div className="relative w-12">
					<div className="absolute -top-2 text-gray-500 text-xs font-normal">
						atau
					</div>
				</div>

				<div className="w-full h-px relative bg-zinc-950/8"></div>
			</div>

			<button
				type="button"
				className="cursor-pointer py-2.5 h-10 w-full mb-4 rounded-xl outline outline-offset-[-0.74px] outline-zinc-950/5 flex justify-center items-center gap-2.5"
			>
				<img src="/google.svg" />
				<span className="text-zinc-950 text-sm font-medium">
					Masuk dengan Google
				</span>
			</button>

			<p className="text-gray-500 text-sm font-normal flex gap-1 items-center">
				Belum punya akun?
				<Link
					to="/register"
					className="text-violet-700 text-base font-semibold"
				>
					Daftar gratis
				</Link>
			</p>
		</div>
	);
}
