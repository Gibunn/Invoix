import AuthFormLayout from "@/common/AuthFormLayout";
import ForgotPasswordFooter from "../components-forgot-password/ForgotPasswordFooter";
import ForgotPasswordForm from "../components-forgot-password/ForgotPasswordForm";
import ForgotPasswordHeader from "../components-forgot-password/ForgotPasswordHeader";

export default function ForgotPassword() {
	const sent = false;

	return (
		<AuthFormLayout>
			<ForgotPasswordHeader sent={sent} />
			<ForgotPasswordForm sent={sent} />
			<ForgotPasswordFooter />
		</AuthFormLayout>
	);
}
