import AuthHeader from "@/common/AuthHeader";

export default function ForgotPasswordHeader() {
	return (
		<AuthHeader
			title="Lupa password?"
			subTitle="Masukkan email untuk reset password"
		/>
	);
}
