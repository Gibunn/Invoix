import { Button } from "@/common/button";
import { Input } from "@/common/Input";
import { Label } from "@/common/label";

interface ForgotPasswordFormProps {
	sent: boolean;
}

export default function ForgotPasswordForm({ sent }: ForgotPasswordFormProps) {
	return sent ? (
		<div className="mb-5">
			<div className="p-5 bg-[#ECFDF5] flex flex-col gap-3 items-center justify-center w-full rounded-2xl">
				<img src="/success-confirm.svg" />
				<p className="text-[#006045] text-sm text-center">
					Kami sudah mengirim link reset password ke email kamu. Link
					berlaku selama 1 jam.
				</p>
			</div>

			<button
				type="button"
				className="mt-5 cursor-pointer py-2.5 h-10 w-full rounded-xl outline outline-offset-[-0.74px] outline-zinc-950/5 flex justify-center items-center gap-2.5"
			>
				Kirim Ulang
			</button>
		</div>
	) : (
		<form className="flex flex-col gap-4 w-full mb-6">
			<div className="flex flex-col gap-1.5 w-full">
				<Label htmlFor="email">Email</Label>
				<Input id="email" placeholder="Masukkan email" />
			</div>

			<Button className="h-10">Kirim Link Reset</Button>
		</form>
	);
}
