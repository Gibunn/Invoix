import AuthHeader from "@/common/AuthHeader";

interface ForgotPasswordHeaderProps {
	sent: boolean;
}

export default function ForgotPasswordHeader({
	sent,
}: ForgotPasswordHeaderProps) {
	return (
		<AuthHeader
			title={sent ? "Cek email kamu" : "Lupa password?"}
			subTitle={
				sent
					? "Link reset password sudah dikirim"
					: "Masukkan email untuk reset password"
			}
		/>
	);
}
